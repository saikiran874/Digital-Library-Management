/* =========================================================
   ADMIN BOOK MANAGEMENT
   ========================================================= */

let editingBookId = null;


/* =========================================================
   CHECK ADMIN SESSION
   ========================================================= */

async function checkAdminAccess() {

    try {

        const response =
            await fetch("/session");

        const result =
            await response.json();


        if (!result.logged_in) {

            alert("Please login first.");

            window.location.href =
                "login.html";

            return false;
        }


        if (result.user.role !== "admin") {

            alert("Admin access required.");

            window.location.href =
                "dashboard.html";

            return false;
        }


        return true;

    } catch (error) {

        console.error(
            "Admin Session Error:",
            error
        );

        alert(
            "Unable to connect to the server."
        );

        return false;
    }
}


/* =========================================================
   LOAD ALL BOOKS
   ========================================================= */

async function loadAdminBooks() {

    const tableBody =
        document.getElementById(
            "booksTableBody"
        );


    tableBody.innerHTML = `
        <tr>
            <td colspan="6" class="loading">
                Loading books...
            </td>
        </tr>
    `;


    try {

        const response =
            await fetch("/admin/books");


        const result =
            await response.json();


        if (!result.success) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="6">
                        ${result.message}
                    </td>
                </tr>
            `;

            return;
        }


        if (result.books.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="6">
                        No books found.
                    </td>
                </tr>
            `;

            return;
        }


        tableBody.innerHTML = "";


        result.books.forEach(function(book) {

            const row =
                document.createElement("tr");


            const availabilityClass =
                book.availability === "Available"
                    ? "available"
                    : "borrowed";


            row.innerHTML = `

                <td>
                    ${book.book_id}
                </td>

                <td>
                    ${escapeHtml(book.title)}
                </td>

                <td>
                    ${escapeHtml(book.author)}
                </td>

                <td>
                    ${escapeHtml(book.category || "N/A")}
                </td>

                <td class="availability ${availabilityClass}">
                    ${escapeHtml(book.availability)}
                </td>

                <td>

                    <div class="action-buttons">

                        <button
                            class="edit-btn"
                            onclick="editBook(${book.book_id})">
                            ✏️ Edit
                        </button>

                        <button
                            class="delete-btn"
                            onclick="deleteBook(${book.book_id})">
                            🗑️ Delete
                        </button>

                    </div>

                </td>

            `;


            tableBody.appendChild(row);

        });


    } catch (error) {

        console.error(
            "Load Admin Books Error:",
            error
        );


        tableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    Unable to load books.
                </td>
            </tr>
        `;
    }
}


/* =========================================================
   ADD BOOK
   ========================================================= */

async function addBook() {

    const title =
        document.getElementById(
            "bookTitle"
        ).value.trim();


    const author =
        document.getElementById(
            "bookAuthor"
        ).value.trim();


    const category =
        document.getElementById(
            "bookCategory"
        ).value;


    const description =
        document.getElementById(
            "bookDescription"
        ).value.trim();


    if (!title || !author) {

        showMessage(
            "Title and author are required.",
            "error"
        );

        return;
    }


    try {

        const response =
            await fetch(
                "/admin/add-book",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        title: title,

                        author: author,

                        category: category,

                        description: description

                    })
                }
            );


        const result =
            await response.json();


        if (!result.success) {

            showMessage(
                result.message,
                "error"
            );

            return;
        }


        showMessage(
            "Book added successfully!",
            "success"
        );


        document
            .getElementById("bookForm")
            .reset();


        await loadAdminBooks();

    } catch (error) {

        console.error(
            "Add Book Error:",
            error
        );

        showMessage(
            "Unable to add book.",
            "error"
        );
    }
}


/* =========================================================
   EDIT BOOK
   ========================================================= */

async function editBook(bookId) {

    try {

        const response =
            await fetch("/admin/books");


        const result =
            await response.json();


        if (!result.success) {

            alert(result.message);

            return;
        }


        const book =
            result.books.find(
                function(item) {

                    return item.book_id ==
                        bookId;

                }
            );


        if (!book) {

            alert("Book not found.");

            return;
        }


        editingBookId =
            book.book_id;


        document.getElementById(
            "bookTitle"
        ).value =
            book.title;


        document.getElementById(
            "bookAuthor"
        ).value =
            book.author;


        document.getElementById(
            "bookCategory"
        ).value =
            book.category || "";


        document.getElementById(
            "bookDescription"
        ).value =
            book.description || "";


        document.getElementById(
            "formTitle"
        ).textContent =
            "✏️ Edit Book";


        document.getElementById(
            "saveBookButton"
        ).textContent =
            "Update Book";


        document.getElementById(
            "cancelEditButton"
        ).style.display =
            "inline-block";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } catch (error) {

        console.error(
            "Edit Book Error:",
            error
        );

        alert(
            "Unable to load book details."
        );
    }
}


/* =========================================================
   UPDATE BOOK
   ========================================================= */

async function updateBook() {

    const title =
        document.getElementById(
            "bookTitle"
        ).value.trim();


    const author =
        document.getElementById(
            "bookAuthor"
        ).value.trim();


    const category =
        document.getElementById(
            "bookCategory"
        ).value;


    const description =
        document.getElementById(
            "bookDescription"
        ).value.trim();


    if (!title || !author) {

        showMessage(
            "Title and author are required.",
            "error"
        );

        return;
    }


    try {

        const response =
            await fetch(
                "/admin/update-book",
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        book_id:
                            editingBookId,

                        title: title,

                        author: author,

                        category: category,

                        description: description

                    })
                }
            );


        const result =
            await response.json();


        if (!result.success) {

            showMessage(
                result.message,
                "error"
            );

            return;
        }


        showMessage(
            "Book updated successfully!",
            "success"
        );


        cancelEdit();


        await loadAdminBooks();

    } catch (error) {

        console.error(
            "Update Book Error:",
            error
        );

        showMessage(
            "Unable to update book.",
            "error"
        );
    }
}


/* =========================================================
   DELETE BOOK
   ========================================================= */

async function deleteBook(bookId) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this book?"
        );


    if (!confirmed) {
        return;
    }


    try {

        const response =
            await fetch(
                "/admin/delete-book",
                {
                    method: "DELETE",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        book_id: bookId

                    })
                }
            );


        const result =
            await response.json();


        if (!result.success) {

            alert(result.message);

            return;
        }


        alert(
            "Book deleted successfully!"
        );


        await loadAdminBooks();

    } catch (error) {

        console.error(
            "Delete Book Error:",
            error
        );

        alert(
            "Unable to delete book."
        );
    }
}


/* =========================================================
   CANCEL EDIT
   ========================================================= */

function cancelEdit() {

    editingBookId = null;


    document
        .getElementById("bookForm")
        .reset();


    document.getElementById(
        "formTitle"
    ).textContent =
        "➕ Add New Book";


    document.getElementById(
        "saveBookButton"
    ).textContent =
        "Add Book";


    document.getElementById(
        "cancelEditButton"
    ).style.display =
        "none";


    clearMessage();
}


/* =========================================================
   FORM SUBMIT
   ========================================================= */

document
    .getElementById("bookForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            if (editingBookId !== null) {

                updateBook();

            } else {

                addBook();

            }

        }
    );


/* =========================================================
   MESSAGE
   ========================================================= */

function showMessage(
    message,
    type
) {

    const messageBox =
        document.getElementById(
            "formMessage"
        );


    messageBox.textContent =
        message;


    messageBox.className =
        "message " +
        (
            type === "success"
                ? "success-message"
                : "error-message"
        );


    messageBox.style.display =
        "block";
}


function clearMessage() {

    const messageBox =
        document.getElementById(
            "formMessage"
        );


    messageBox.style.display =
        "none";
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value;

    return div.innerHTML;
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function goToDashboard() {

    window.location.href =
        "dashboard.html";
}


/* =========================================================
   LOGOUT
   ========================================================= */

async function logoutAdmin() {

    try {

        await fetch(
            "/logout",
            {
                method: "POST"
            }
        );

    } catch (error) {

        console.error(
            "Logout Error:",
            error
        );

    }


    window.location.href =
        "login.html";
}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async function() {

        const isAdmin =
            await checkAdminAccess();


        if (isAdmin) {

            await loadAdminBooks();

        }

    }
);