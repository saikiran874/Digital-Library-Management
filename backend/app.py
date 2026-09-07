import os
from dotenv import load_dotenv

load_dotenv()
from flask import Flask, request, jsonify, session
import mysql.connector


# ==============================
# Flask Configuration
# ==============================

app = Flask(
    __name__,
    static_folder="../frontend",
    static_url_path=""
)

# Secret key for Flask sessions
app.secret_key = "digital-library-secret-key"


# ==============================
# MySQL Database Connection
# ==============================

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password=os.getenv("MYSQL_PASSWORD"),
    database="digital_library"
)


# ==============================
# Home Route
# ==============================

@app.route("/")
def home():
    return app.send_static_file("index.html")


# ==============================
# Register User
# ==============================

@app.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "Request data is required"
        }), 400

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({
            "success": False,
            "message": "All fields are required"
        }), 400

    cursor = None

    try:

        cursor = db.cursor()

        cursor.execute(
            "SELECT user_id FROM users WHERE email = %s",
            (email,)
        )

        existing_user = cursor.fetchone()

        if existing_user:

            return jsonify({
                "success": False,
                "message": "Email already registered"
            }), 409

        cursor.execute(
            """
            INSERT INTO users
            (
                name,
                email,
                password
            )
            VALUES
            (
                %s,
                %s,
                %s
            )
            """,
            (name, email, password)
        )

        db.commit()

        return jsonify({
            "success": True,
            "message": "Account created successfully"
        })

    except Exception as e:

        db.rollback()

        print("Registration Error:", e)

        return jsonify({
            "success": False,
            "message": "Registration failed"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ==============================
# User Login
# ==============================

@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "Request data is required"
        }), 400

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "success": False,
            "message": "Email and password are required"
        }), 400

    cursor = None

    try:

        cursor = db.cursor(dictionary=True)

        cursor.execute(
            """
            SELECT
                user_id,
                name,
                email,
                password,
                role
            FROM users
            WHERE email = %s
            """,
            (email,)
        )

        user = cursor.fetchone()

        if not user:

            return jsonify({
                "success": False,
                "message": "Invalid email or password"
            }), 401

        if user["password"] != password:

            return jsonify({
                "success": False,
                "message": "Invalid email or password"
            }), 401

        session["user_id"] = user["user_id"]
        session["name"] = user["name"]
        session["email"] = user["email"]
        session["role"] = user["role"]

        return jsonify({
            "success": True,
            "message": "Login successful",
            "user": {
                "user_id": user["user_id"],
                "name": user["name"],
                "email": user["email"],
                "role": user["role"]
            }
        })

    except Exception as e:

        print("Login Error:", e)

        return jsonify({
            "success": False,
            "message": "Login failed"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ==============================
# Check Current Login Session
# ==============================

@app.route("/session", methods=["GET"])
def check_session():

    if "user_id" not in session:

        return jsonify({
            "success": False,
            "logged_in": False,
            "message": "User is not logged in"
        })

    return jsonify({
        "success": True,
        "logged_in": True,
        "user": {
            "user_id": session["user_id"],
            "name": session["name"],
            "email": session["email"],
            "role": session["role"]
        }
    })


# ==============================
# Logout User
# ==============================

@app.route("/logout", methods=["POST"])
def logout():

    session.clear()

    return jsonify({
        "success": True,
        "message": "Logged out successfully"
    })


# ==============================
# Get All Books
# ==============================

@app.route("/books", methods=["GET"])
def get_books():

    cursor = None

    try:

        cursor = db.cursor(dictionary=True)

        cursor.execute(
            """
            SELECT
                book_id,
                title,
                author,
                category,
                description,
                availability
            FROM books
            """
        )

        books = cursor.fetchall()

        return jsonify({
            "success": True,
            "books": books
        })

    except Exception as e:

        print("Books Error:", e)

        return jsonify({
            "success": False,
            "message": "Unable to load books"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ==============================
# Borrow Book
# ==============================

@app.route("/borrow", methods=["POST"])
def borrow_book():

    if "user_id" not in session:

        return jsonify({
            "success": False,
            "message": "Please login before borrowing a book"
        }), 401

    data = request.get_json()

    if not data:

        return jsonify({
            "success": False,
            "message": "Request data is required"
        }), 400

    book_id = data.get("book_id")

    if not book_id:

        return jsonify({
            "success": False,
            "message": "Book ID is required"
        }), 400

    user_id = session["user_id"]

    cursor = None

    try:

        cursor = db.cursor(dictionary=True)

        # Check book
        cursor.execute(
            """
            SELECT
                book_id,
                title,
                availability
            FROM books
            WHERE book_id = %s
            """,
            (book_id,)
        )

        book = cursor.fetchone()

        if not book:

            return jsonify({
                "success": False,
                "message": "Book not found"
            }), 404

        # Check availability
        if book["availability"] != "Available":

            return jsonify({
                "success": False,
                "message": "This book is currently unavailable"
            }), 409

        # Check if this user already borrowed the book
        cursor.execute(
            """
            SELECT
                borrowing_id
            FROM borrowings
            WHERE user_id = %s
              AND book_id = %s
              AND status = 'Borrowed'
            """,
            (user_id, book_id)
        )

        existing_borrowing = cursor.fetchone()

        if existing_borrowing:

            return jsonify({
                "success": False,
                "message": "You have already borrowed this book"
            }), 409

        # Insert borrowing record
        cursor.execute(
            """
            INSERT INTO borrowings
            (
                user_id,
                book_id,
                status
            )
            VALUES
            (
                %s,
                %s,
                'Borrowed'
            )
            """,
            (user_id, book_id)
        )

        # Update book availability
        cursor.execute(
            """
            UPDATE books
            SET availability = 'Borrowed'
            WHERE book_id = %s
            """,
            (book_id,)
        )

        db.commit()

        return jsonify({
            "success": True,
            "message": "Book borrowed successfully",
            "book": {
                "book_id": book["book_id"],
                "title": book["title"]
            }
        })

    except Exception as e:

        db.rollback()

        print("Borrow Error:", e)

        return jsonify({
            "success": False,
            "message": "Unable to borrow book"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ==============================
# Get My Borrowed Books
# ==============================

@app.route("/my-borrowed-books", methods=["GET"])
def my_borrowed_books():

    # Check login
    if "user_id" not in session:

        return jsonify({
            "success": False,
            "message": "Please login to view borrowed books"
        }), 401

    user_id = session["user_id"]

    cursor = None

    try:

        cursor = db.cursor(dictionary=True)

        cursor.execute(
            """
            SELECT
                borrowings.borrowing_id,
                borrowings.book_id,
                books.title,
                books.author,
                books.category,
                books.description,
                borrowings.borrowed_date,
                borrowings.returned_date,
                borrowings.status
            FROM borrowings
            INNER JOIN books
                ON borrowings.book_id = books.book_id
            WHERE borrowings.user_id = %s
              AND borrowings.status = 'Borrowed'
            ORDER BY borrowings.borrowed_date DESC
            """,
            (user_id,)
        )

        borrowed_books = cursor.fetchall()

        return jsonify({
            "success": True,
            "books": borrowed_books
        })

    except Exception as e:

        print("Borrowed Books Error:", e)

        return jsonify({
            "success": False,
            "message": "Unable to load borrowed books"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ==============================
# Return Book
# ==============================

@app.route("/return-book", methods=["POST"])
def return_book():

    # Check login
    if "user_id" not in session:

        return jsonify({
            "success": False,
            "message": "Please login before returning a book"
        }), 401

    data = request.get_json()

    if not data:

        return jsonify({
            "success": False,
            "message": "Request data is required"
        }), 400

    book_id = data.get("book_id")

    if not book_id:

        return jsonify({
            "success": False,
            "message": "Book ID is required"
        }), 400

    user_id = session["user_id"]

    cursor = None

    try:

        cursor = db.cursor(dictionary=True)

        # Check if this user has borrowed this book
        cursor.execute(
            """
            SELECT
                borrowing_id,
                book_id,
                status
            FROM borrowings
            WHERE user_id = %s
              AND book_id = %s
              AND status = 'Borrowed'
            """,
            (user_id, book_id)
        )

        borrowing = cursor.fetchone()

        if not borrowing:

            return jsonify({
                "success": False,
                "message": "You have not borrowed this book"
            }), 404

        # Update borrowing record
        cursor.execute(
            """
            UPDATE borrowings
            SET
                returned_date = NOW(),
                status = 'Returned'
            WHERE borrowing_id = %s
            """,
            (borrowing["borrowing_id"],)
        )

        # Make book available again
        cursor.execute(
            """
            UPDATE books
            SET availability = 'Available'
            WHERE book_id = %s
            """,
            (book_id,)
        )

        db.commit()

        return jsonify({
            "success": True,
            "message": "Book returned successfully"
        })

    except Exception as e:

        db.rollback()

        print("Return Book Error:", e)

        return jsonify({
            "success": False,
            "message": "Unable to return book"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ==============================
# Start Flask Server
# ==============================

# =========================================================
# ADMIN BOOK MANAGEMENT
# =========================================================

def admin_required():
    if "user_id" not in session:
        return False

    if session.get("role") != "admin":
        return False

    return True


# ---------------------------------------------------------
# GET ALL BOOKS - ADMIN
# ---------------------------------------------------------

@app.route("/admin/books", methods=["GET"])
def admin_books():

    if not admin_required():
        return jsonify({
            "success": False,
            "message": "Admin access required"
        }), 403

    cursor = None

    try:
        cursor = db.cursor(dictionary=True)

        cursor.execute("""
            SELECT
                book_id,
                title,
                author,
                category,
                description,
                availability
            FROM books
            ORDER BY book_id DESC
        """)

        books = cursor.fetchall()

        return jsonify({
            "success": True,
            "books": books
        })

    except Exception as e:

        print("Admin Books Error:", e)

        return jsonify({
            "success": False,
            "message": "Unable to load books"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ---------------------------------------------------------
# ADD BOOK
# ---------------------------------------------------------

@app.route("/admin/add-book", methods=["POST"])
def admin_add_book():

    if not admin_required():
        return jsonify({
            "success": False,
            "message": "Admin access required"
        }), 403

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "Book data is required"
        }), 400

    title = data.get("title")
    author = data.get("author")
    category = data.get("category")
    description = data.get("description")

    if not title or not author:
        return jsonify({
            "success": False,
            "message": "Title and author are required"
        }), 400

    cursor = None

    try:

        cursor = db.cursor()

        cursor.execute("""
            INSERT INTO books
            (
                title,
                author,
                category,
                description,
                availability
            )
            VALUES
            (%s, %s, %s, %s, 'Available')
        """, (
            title,
            author,
            category,
            description
        ))

        db.commit()

        return jsonify({
            "success": True,
            "message": "Book added successfully"
        })

    except Exception as e:

        db.rollback()

        print("Add Book Error:", e)

        return jsonify({
            "success": False,
            "message": "Unable to add book"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ---------------------------------------------------------
# UPDATE BOOK
# ---------------------------------------------------------

@app.route("/admin/update-book", methods=["PUT"])
def admin_update_book():

    if not admin_required():
        return jsonify({
            "success": False,
            "message": "Admin access required"
        }), 403

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "Book data is required"
        }), 400

    book_id = data.get("book_id")
    title = data.get("title")
    author = data.get("author")
    category = data.get("category")
    description = data.get("description")

    if not book_id:
        return jsonify({
            "success": False,
            "message": "Book ID is required"
        }), 400

    if not title or not author:
        return jsonify({
            "success": False,
            "message": "Title and author are required"
        }), 400

    cursor = None

    try:

        cursor = db.cursor()

        cursor.execute("""
            UPDATE books
            SET
                title = %s,
                author = %s,
                category = %s,
                description = %s
            WHERE book_id = %s
        """, (
            title,
            author,
            category,
            description,
            book_id
        ))

        db.commit()

        if cursor.rowcount == 0:
            return jsonify({
                "success": False,
                "message": "Book not found"
            }), 404

        return jsonify({
            "success": True,
            "message": "Book updated successfully"
        })

    except Exception as e:

        db.rollback()

        print("Update Book Error:", e)

        return jsonify({
            "success": False,
            "message": "Unable to update book"
        }), 500

    finally:

        if cursor:
            cursor.close()


# ---------------------------------------------------------
# DELETE BOOK
# ---------------------------------------------------------

@app.route("/admin/delete-book", methods=["DELETE"])
def admin_delete_book():

    if not admin_required():
        return jsonify({
            "success": False,
            "message": "Admin access required"
        }), 403

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "Book ID is required"
        }), 400

    book_id = data.get("book_id")

    if not book_id:
        return jsonify({
            "success": False,
            "message": "Book ID is required"
        }), 400

    cursor = None

    try:

        cursor = db.cursor(dictionary=True)

        # Check whether the book exists
        cursor.execute("""
            SELECT book_id, availability
            FROM books
            WHERE book_id = %s
        """, (book_id,))

        book = cursor.fetchone()

        if not book:
            return jsonify({
                "success": False,
                "message": "Book not found"
            }), 404

        # Do not delete a currently borrowed book
        if book["availability"] == "Borrowed":
            return jsonify({
                "success": False,
                "message": "Cannot delete a borrowed book"
            }), 400

        cursor.execute("""
            DELETE FROM books
            WHERE book_id = %s
        """, (book_id,))

        db.commit()

        return jsonify({
            "success": True,
            "message": "Book deleted successfully"
        })

    except Exception as e:

        db.rollback()

        print("Delete Book Error:", e)

        return jsonify({
            "success": False,
            "message": "Unable to delete book"
        }), 500

    finally:

        if cursor:
            cursor.close()
if __name__ == "__main__":
    app.run(debug=True)