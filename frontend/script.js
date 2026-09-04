/* =========================================================
   DIGITAL LIBRARY MANAGEMENT SYSTEM
   Complete script.js
   ========================================================= */


/* =========================================================
   1. EXPLORE BOOKS
   ========================================================= */

function exploreBooks() {
    window.location.href = "books.html";
}


/* =========================================================
   2. SEARCH BOOKS
   ========================================================= */

function searchBooks() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value.trim().toLowerCase();

    const searchResult = document.getElementById("searchResult");

    if (searchText === "") {

        if (searchResult) {
            searchResult.innerHTML =
                "Please enter a book name or topic.";
        }

        return;
    }

    const books = [
        "Python Programming",
        "Web Development",
        "Data Science",
        "Artificial Intelligence",
        "Java Programming",
        "Database Management"
    ];

    const result = books.filter(function(book) {
        return book.toLowerCase().includes(searchText);
    });

    if (searchResult) {

        if (result.length > 0) {

            searchResult.innerHTML =
                "Book found: " + result.join(", ");

        } else {

            searchResult.innerHTML =
                "No matching books found.";
        }
    }
}


/* =========================================================
   3. BOOK DETAILS
   ========================================================= */

function loadBookDetails() {

    const params = new URLSearchParams(window.location.search);

    const book = params.get("book");

    const books = {

        python: {
            title: "Python Programming",
            category: "Computer Science",
            cover: "📘",
            author: "Digital Library Team",
            description:
                "Learn Python programming from basics to advanced concepts."
        },

        web: {
            title: "Web Development",
            category: "Web Development",
            cover: "📗",
            author: "Digital Library Team",
            description:
                "Learn HTML, CSS and JavaScript for creating modern websites."
        },

        data: {
            title: "Data Science",
            category: "Data Science",
            cover: "📕",
            author: "Digital Library Team",
            description:
                "Explore data analysis, data visualization and important data science concepts."
        },

        ai: {
            title: "Artificial Intelligence",
            category: "Artificial Intelligence",
            cover: "🤖",
            author: "Digital Library Team",
            description:
                "Learn the fundamentals of Artificial Intelligence and machine learning."
        },

        java: {
            title: "Java Programming",
            category: "Computer Science",
            cover: "📙",
            author: "Digital Library Team",
            description:
                "Learn object-oriented programming and important Java programming concepts."
        },

        database: {
            title: "Database Management",
            category: "Computer Science",
            cover: "📓",
            author: "Digital Library Team",
            description:
                "Learn SQL, databases, tables, relationships and database management concepts."
        }
    };

    if (!book || !books[book]) {
        return;
    }

    const selectedBook = books[book];

    const title = document.getElementById("bookTitle");
    const category = document.getElementById("bookCategory");
    const cover = document.getElementById("bookCover");
    const author = document.getElementById("bookAuthor");
    const description = document.getElementById("bookDescription");
    const readButton = document.getElementById("readBookButton");

    if (title) {
        title.textContent = selectedBook.title;
    }

    if (category) {
        category.textContent =
            "Category: " + selectedBook.category;
    }

    if (cover) {
        cover.textContent = selectedBook.cover;
    }

    if (author) {
        author.textContent = selectedBook.author;
    }

    if (description) {
        description.textContent = selectedBook.description;
    }

    if (readButton) {
        readButton.href =
            "book-reader.html?book=" + book;
    }
}


/* =========================================================
   4. BOOK READER DATA
   ========================================================= */

const bookChapters = {


    /* =====================================================
       PYTHON PROGRAMMING
       ===================================================== */

    python: [

        /* -------------------------------------------------
           CHAPTER 1
           ------------------------------------------------- */

        `
        <h2>Chapter 1: Introduction to Python</h2>

        <h3>1. What is Python?</h3>

        <p>
            Python is a high-level, interpreted, general-purpose
            programming language. It is known for its simple and
            readable syntax, making it suitable for beginners as
            well as experienced programmers.
        </p>

        <p>
            Python is widely used in software development,
            data science, artificial intelligence, automation,
            web development, and many other areas.
        </p>

        <h3>2. History of Python</h3>

        <p>
            Python was created by Guido van Rossum. Development
            started in the late 1980s and Python was first released
            in 1991.
        </p>

        <p>
            Python was designed with the goal of providing a
            programming language that was easy to read, easy to
            write and powerful enough for different types of
            applications.
        </p>

        <h3>3. Features of Python</h3>

        <ul>
            <li>Simple and easy to learn</li>
            <li>Readable syntax</li>
            <li>Interpreted language</li>
            <li>High-level language</li>
            <li>Dynamically typed</li>
            <li>Object-oriented programming support</li>
            <li>Portable and cross-platform</li>
            <li>Large standard library</li>
            <li>Large collection of third-party libraries</li>
        </ul>

        <h3>4. Advantages of Python</h3>

        <p>
            Python allows developers to write programs using fewer
            lines of code compared with many other programming
            languages.
        </p>

        <p>
            Its large community and extensive collection of
            libraries make it useful for education, software
            development, automation, data analysis and AI.
        </p>

        <h3>5. Applications of Python</h3>

        <ul>
            <li>Web development</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Automation</li>
            <li>Game development</li>
            <li>Scientific computing</li>
            <li>Desktop applications</li>
        </ul>

        <h3>6. Why Learn Python?</h3>

        <p>
            Python is beginner-friendly and has a simple syntax.
            At the same time, it is powerful enough to be used in
            professional software development and advanced
            technologies such as Artificial Intelligence.
        </p>

        <h3>7. First Python Program</h3>

        <pre><code>print("Hello, World!")</code></pre>

        <p>
            The print() function is used to display information
            on the screen.
        </p>

        <h3>8. Basic Python Syntax</h3>

        <p>
            Python uses indentation to define blocks of code.
            Unlike some programming languages, Python does not
            require curly braces to define a block.
        </p>

        <pre><code>if 10 &gt; 5:
    print("10 is greater")</code></pre>

        <h3>Conclusion</h3>

        <p>
            Python is a simple, powerful and versatile programming
            language. In the next chapter, we will learn about
            variables and data types.
        </p>
        `,


        /* -------------------------------------------------
           CHAPTER 2
           ------------------------------------------------- */

        `
        <h2>Chapter 2: Variables and Data Types</h2>

        <h3>1. What is a Variable?</h3>

        <p>
            A variable is a name used to store a value in a
            program. Python automatically determines the type
            of value stored in a variable.
        </p>

        <pre><code>name = "Sai"
age = 20
marks = 85.5</code></pre>

        <h3>2. Rules for Naming Variables</h3>

        <ul>
            <li>A variable can contain letters, numbers and underscores.</li>
            <li>A variable cannot start with a number.</li>
            <li>Python variable names are case-sensitive.</li>
            <li>Keywords cannot be used as variable names.</li>
        </ul>

        <h3>3. Python Data Types</h3>

        <p>
            Data types specify the kind of value stored in a
            variable.
        </p>

        <ul>
            <li>int - Integer values</li>
            <li>float - Decimal values</li>
            <li>str - Text values</li>
            <li>bool - True or False</li>
            <li>list - Ordered collection</li>
            <li>tuple - Immutable collection</li>
            <li>set - Unordered collection of unique values</li>
            <li>dict - Key-value pairs</li>
        </ul>

        <h3>4. Integer</h3>

        <pre><code>age = 20</code></pre>

        <h3>5. Float</h3>

        <pre><code>price = 99.50</code></pre>

        <h3>6. String</h3>

        <pre><code>name = "Python"</code></pre>

        <h3>7. Boolean</h3>

        <pre><code>is_student = True</code></pre>

        <h3>8. Checking Data Type</h3>

        <pre><code>age = 20
print(type(age))</code></pre>

        <h3>9. Type Conversion</h3>

        <p>
            Type conversion is used to change a value from one
            data type to another.
        </p>

        <pre><code>number = "100"
number = int(number)

print(number)</code></pre>

        <h3>10. User Input</h3>

        <pre><code>name = input("Enter your name: ")
print("Hello", name)</code></pre>

        <h3>Conclusion</h3>

        <p>
            Variables and data types are fundamental concepts
            in programming. They allow programs to store and
            process different types of information.
        </p>
        `,


        /* -------------------------------------------------
           CHAPTER 3
           ------------------------------------------------- */

        `
        <h2>Chapter 3: Operators</h2>

        <h3>1. What are Operators?</h3>

        <p>
            Operators are symbols used to perform operations
            on values and variables.
        </p>

        <h3>2. Arithmetic Operators</h3>

        <ul>
            <li>+ Addition</li>
            <li>- Subtraction</li>
            <li>* Multiplication</li>
            <li>/ Division</li>
            <li>% Modulus</li>
            <li>** Exponent</li>
            <li>// Floor Division</li>
        </ul>

        <pre><code>a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)</code></pre>

        <h3>3. Comparison Operators</h3>

        <ul>
            <li>== Equal to</li>
            <li>!= Not equal to</li>
            <li>&gt; Greater than</li>
            <li>&lt; Less than</li>
            <li>&gt;= Greater than or equal to</li>
            <li>&lt;= Less than or equal to</li>
        </ul>

        <pre><code>age = 20

print(age &gt; 18)
print(age == 20)</code></pre>

        <h3>4. Logical Operators</h3>

        <ul>
            <li>and</li>
            <li>or</li>
            <li>not</li>
        </ul>

        <pre><code>age = 20

print(age &gt; 18 and age &lt; 30)
print(age &gt; 18 or age &lt; 10)
print(not(age &gt; 18))</code></pre>

        <h3>5. Assignment Operators</h3>

        <pre><code>x = 10
x += 5
x -= 2
x *= 3</code></pre>

        <h3>6. Membership Operators</h3>

        <p>
            Membership operators check whether a value exists
            inside a sequence.
        </p>

        <pre><code>numbers = [10, 20, 30]

print(20 in numbers)
print(50 not in numbers)</code></pre>

        <h3>7. Identity Operators</h3>

        <p>
            The identity operators <strong>is</strong> and
            <strong>is not</strong> compare object identity.
        </p>

        <h3>Conclusion</h3>

        <p>
            Operators allow programs to perform calculations,
            comparisons and logical operations.
        </p>
        `,


        /* -------------------------------------------------
           CHAPTER 4
           ------------------------------------------------- */

        `
        <h2>Chapter 4: Conditional Statements</h2>

        <h3>1. What are Conditional Statements?</h3>

        <p>
            Conditional statements allow a program to make
            decisions based on conditions.
        </p>

        <h3>2. if Statement</h3>

        <pre><code>age = 20

if age &gt;= 18:
    print("Eligible to vote")</code></pre>

        <h3>3. if-else Statement</h3>

        <pre><code>age = 16

if age &gt;= 18:
    print("Adult")
else:
    print("Minor")</code></pre>

        <h3>4. if-elif-else Statement</h3>

        <pre><code>marks = 85

if marks &gt;= 90:
    print("A+")
elif marks &gt;= 75:
    print("A")
elif marks &gt;= 60:
    print("B")
else:
    print("C")</code></pre>

        <h3>5. Nested if</h3>

        <pre><code>age = 20
citizen = True

if age &gt;= 18:
    if citizen:
        print("Eligible")</code></pre>

        <h3>6. Conditional Expressions</h3>

        <pre><code>age = 20

result = "Adult" if age &gt;= 18 else "Minor"

print(result)</code></pre>

        <h3>7. Importance of Conditions</h3>

        <p>
            Conditional statements are used in login systems,
            grading systems, banking applications, games and
            many other programs.
        </p>

        <h3>Conclusion</h3>

        <p>
            Conditional statements help programs make decisions
            based on different situations.
        </p>
        `,


        /* -------------------------------------------------
           CHAPTER 5
           ------------------------------------------------- */

        `
        <h2>Chapter 5: Loops</h2>

        <h3>1. What is a Loop?</h3>

        <p>
            A loop is used to execute a block of code repeatedly.
            Python mainly provides for loops and while loops.
        </p>

        <h3>2. for Loop</h3>

        <pre><code>for i in range(5):
    print(i)</code></pre>

        <h3>3. Looping Through a List</h3>

        <pre><code>fruits = ["Apple", "Banana", "Mango"]

for fruit in fruits:
    print(fruit)</code></pre>

        <h3>4. while Loop</h3>

        <pre><code>count = 1

while count &lt;= 5:
    print(count)
    count += 1</code></pre>

        <h3>5. break Statement</h3>

        <pre><code>for i in range(10):

    if i == 5:
        break

    print(i)</code></pre>

        <h3>6. continue Statement</h3>

        <pre><code>for i in range(5):

    if i == 2:
        continue

    print(i)</code></pre>

        <h3>7. Nested Loops</h3>

        <pre><code>for i in range(3):

    for j in range(3):
        print(i, j)</code></pre>

        <h3>8. Applications of Loops</h3>

        <ul>
            <li>Processing lists</li>
            <li>Generating patterns</li>
            <li>Repeating calculations</li>
            <li>Processing database records</li>
            <li>Game programming</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Loops reduce repeated code and make programs more
            efficient and easier to maintain.
        </p>
        `,


        /* -------------------------------------------------
           CHAPTER 6
           ------------------------------------------------- */

        `
        <h2>Chapter 6: Functions</h2>

        <h3>1. What is a Function?</h3>

        <p>
            A function is a reusable block of code designed to
            perform a specific task.
        </p>

        <h3>2. Creating a Function</h3>

        <pre><code>def greet():
    print("Hello")

greet()</code></pre>

        <h3>3. Function Parameters</h3>

        <pre><code>def greet(name):
    print("Hello", name)

greet("Sai")</code></pre>

        <h3>4. Return Statement</h3>

        <pre><code>def add(a, b):
    return a + b

result = add(10, 20)

print(result)</code></pre>

        <h3>5. Default Parameters</h3>

        <pre><code>def greet(name="User"):
    print("Hello", name)

greet()
greet("Sai")</code></pre>

        <h3>6. Multiple Arguments</h3>

        <pre><code>def add(a, b, c):
    return a + b + c

print(add(10, 20, 30))</code></pre>

        <h3>7. Benefits of Functions</h3>

        <ul>
            <li>Code reusability</li>
            <li>Better organization</li>
            <li>Easier debugging</li>
            <li>Reduced code repetition</li>
            <li>Improved readability</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Functions are an important part of programming because
            they allow developers to divide large programs into
            smaller reusable parts.
        </p>
        `
    ],


    /* =====================================================
       WEB DEVELOPMENT
       ===================================================== */

    web: [

        `
        <h2>Chapter 1: Introduction to Web Development</h2>

        <h3>1. What is Web Development?</h3>

        <p>
            Web development is the process of creating websites
            and web applications that run inside web browsers.
        </p>

        <h3>2. How Websites Work</h3>

        <p>
            A browser sends a request to a web server. The server
            processes the request and sends information back to
            the browser. The browser then displays the webpage.
        </p>

        <h3>3. Frontend Development</h3>

        <p>
            Frontend development focuses on everything users see
            and interact with.
        </p>

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>

        <h3>4. Backend Development</h3>

        <p>
            Backend development handles server-side logic,
            databases, authentication and APIs.
        </p>

        <h3>5. Full Stack Development</h3>

        <p>
            Full stack development involves both frontend and
            backend development.
        </p>

        <h3>6. Web Browsers</h3>

        <p>
            Browsers such as Chrome, Edge, Firefox and Safari
            interpret HTML, CSS and JavaScript and display
            webpages to users.
        </p>

        <h3>7. Static and Dynamic Websites</h3>

        <p>
            A static website mainly displays fixed content.
            A dynamic website can generate content based on
            user actions, databases or server-side processing.
        </p>

        <h3>8. Basic Webpage</h3>

        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <h3>Conclusion</h3>

        <p>
            Web development combines HTML, CSS, JavaScript and
            backend technologies to create useful websites.
        </p>
        `,


        `
        <h2>Chapter 2: HTML - Structure of Web Pages</h2>

        <h3>1. What is HTML?</h3>

        <p>
            HTML stands for HyperText Markup Language. It is used
            to create the structure of webpages.
        </p>

        <h3>2. HTML Elements</h3>

        <p>
            HTML elements are created using tags.
        </p>

        <pre><code>&lt;h1&gt;Welcome&lt;/h1&gt;</code></pre>

        <h3>3. Headings</h3>

        <pre><code>&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;</code></pre>

        <h3>4. Paragraphs</h3>

        <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>

        <h3>5. Links</h3>

        <pre><code>&lt;a href="https://example.com"&gt;
    Visit Website
&lt;/a&gt;</code></pre>

        <h3>6. Images</h3>

        <pre><code>&lt;img src="image.jpg" alt="Sample Image"&gt;</code></pre>

        <h3>7. Lists</h3>

        <pre><code>&lt;ul&gt;
    &lt;li&gt;HTML&lt;/li&gt;
    &lt;li&gt;CSS&lt;/li&gt;
    &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</code></pre>

        <h3>8. Tables</h3>

        <pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>

        <h3>9. Forms</h3>

        <pre><code>&lt;form&gt;
    &lt;input type="text"&gt;
    &lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>

        <h3>Conclusion</h3>

        <p>
            HTML provides the basic structure of a webpage.
            CSS can then be used to style that structure.
        </p>
        `,


        `
        <h2>Chapter 3: CSS - Styling Web Pages</h2>

        <h3>1. What is CSS?</h3>

        <p>
            CSS stands for Cascading Style Sheets. It is used to
            control the appearance and layout of webpages.
        </p>

        <h3>2. Why Use CSS?</h3>

        <ul>
            <li>Change colors</li>
            <li>Change fonts</li>
            <li>Add spacing</li>
            <li>Create layouts</li>
            <li>Make responsive webpages</li>
            <li>Add visual effects</li>
        </ul>

        <h3>3. Types of CSS</h3>

        <ul>
            <li>Inline CSS</li>
            <li>Internal CSS</li>
            <li>External CSS</li>
        </ul>

        <h3>4. Inline CSS</h3>

        <pre><code>&lt;p style="color: blue;"&gt;
    Hello
&lt;/p&gt;</code></pre>

        <h3>5. Internal CSS</h3>

        <pre><code>&lt;style&gt;
p {
    color: blue;
}
&lt;/style&gt;</code></pre>

        <h3>6. External CSS</h3>

        <pre><code>&lt;link rel="stylesheet"
      href="style.css"&gt;</code></pre>

        <h3>7. CSS Selectors</h3>

        <pre><code>p {
    color: blue;
}

.title {
    font-size: 30px;
}

#header {
    background: black;
}</code></pre>

        <h3>8. Box Model</h3>

        <p>
            The CSS box model consists of content, padding,
            border and margin.
        </p>

        <h3>9. Flexbox</h3>

        <p>
            Flexbox is a CSS layout system used to arrange
            elements efficiently in rows or columns.
        </p>

        <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
}</code></pre>

        <h3>Conclusion</h3>

        <p>
            CSS makes webpages attractive, organized and
            responsive.
        </p>
        `,


        `
        <h2>Chapter 4: JavaScript - Making Websites Interactive</h2>

        <h3>1. What is JavaScript?</h3>

        <p>
            JavaScript is a programming language used to add
            behavior and interactivity to webpages.
        </p>

        <h3>2. Adding JavaScript</h3>

        <pre><code>&lt;script&gt;
    alert("Hello");
&lt;/script&gt;</code></pre>

        <h3>3. Variables</h3>

        <pre><code>let name = "Sai";
const age = 20;</code></pre>

        <h3>4. Data Types</h3>

        <ul>
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>Array</li>
            <li>Object</li>
            <li>Null</li>
            <li>Undefined</li>
        </ul>

        <h3>5. Conditional Statements</h3>

        <pre><code>let age = 20;

if (age &gt;= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}</code></pre>

        <h3>6. Functions</h3>

        <pre><code>function greet() {
    alert("Hello!");
}

greet();</code></pre>

        <h3>7. Events</h3>

        <p>
            JavaScript can respond to events such as clicks,
            keyboard input and mouse movement.
        </p>

        <pre><code>&lt;button onclick="greet()"&gt;
    Click Me
&lt;/button&gt;</code></pre>

        <h3>8. DOM</h3>

        <p>
            DOM stands for Document Object Model. JavaScript can
            use the DOM to access and change HTML elements.
        </p>

        <pre><code>document.getElementById("title")
    .textContent = "Welcome";</code></pre>

        <h3>Conclusion</h3>

        <p>
            JavaScript makes websites interactive and dynamic.
        </p>
        `,


        `
        <h2>Chapter 5: Forms and User Input</h2>

        <h3>1. What are Forms?</h3>

        <p>
            HTML forms are used to collect information from users.
        </p>

        <h3>2. Text Input</h3>

        <pre><code>&lt;input type="text"
       placeholder="Enter your name"&gt;</code></pre>

        <h3>3. Password Input</h3>

        <pre><code>&lt;input type="password"
       placeholder="Enter password"&gt;</code></pre>

        <h3>4. Email Input</h3>

        <pre><code>&lt;input type="email"
       placeholder="Enter email"&gt;</code></pre>

        <h3>5. Radio Buttons</h3>

        <pre><code>&lt;input type="radio"
       name="gender"&gt; Male

&lt;input type="radio"
       name="gender"&gt; Female</code></pre>

        <h3>6. Checkboxes</h3>

        <pre><code>&lt;input type="checkbox"&gt;
I agree to the terms.</code></pre>

        <h3>7. Select Box</h3>

        <pre><code>&lt;select&gt;
    &lt;option&gt;Computer Science&lt;/option&gt;
    &lt;option&gt;Data Science&lt;/option&gt;
&lt;/select&gt;</code></pre>

        <h3>8. Form Validation</h3>

        <p>
            Validation checks whether the information entered
            by the user is valid before submitting a form.
        </p>

        <h3>9. Login Form Example</h3>

        <pre><code>&lt;form&gt;

    &lt;input type="email"
           placeholder="Email"&gt;

    &lt;input type="password"
           placeholder="Password"&gt;

    &lt;button type="submit"&gt;
        Login
    &lt;/button&gt;

&lt;/form&gt;</code></pre>

        <h3>Conclusion</h3>

        <p>
            Forms are essential for login, registration, search,
            feedback and other user interactions.
        </p>
        `,


        `
        <h2>Chapter 6: Responsive Web Design &amp; Mini Project</h2>

        <h3>1. What is Responsive Web Design?</h3>

        <p>
            Responsive web design allows websites to adapt to
            different screen sizes such as desktops, tablets
            and mobile phones.
        </p>

        <h3>2. Viewport</h3>

        <pre><code>&lt;meta name="viewport"
      content="width=device-width,
      initial-scale=1.0"&gt;</code></pre>

        <h3>3. Media Queries</h3>

        <pre><code>@media (max-width: 600px) {

    .container {
        flex-direction: column;
    }

}</code></pre>

        <h3>4. Responsive Layout</h3>

        <p>
            Flexbox, CSS Grid, percentages and media queries can
            be used to create responsive layouts.
        </p>

        <h3>5. Mini Project - Digital Library</h3>

        <p>
            A simple digital library website can contain:
        </p>

        <ul>
            <li>Home page</li>
            <li>Book listing page</li>
            <li>Book details page</li>
            <li>Login page</li>
            <li>Registration page</li>
            <li>Online book reader</li>
        </ul>

        <h3>6. Development Workflow</h3>

        <ol>
            <li>Plan the website</li>
            <li>Create HTML structure</li>
            <li>Add CSS styling</li>
            <li>Add JavaScript functionality</li>
            <li>Test the website</li>
            <li>Make the website responsive</li>
            <li>Deploy the website</li>
        </ol>

        <h3>Conclusion</h3>

        <p>
            HTML provides structure, CSS provides design and
            JavaScript provides interactivity. Together they form
            the foundation of modern web development.
        </p>
        `
    ],


    /* =====================================================
       DATA SCIENCE
       ===================================================== */

    data: [

        `
        <h2>Chapter 1: Introduction to Data Science</h2>

        <h3>1. What is Data Science?</h3>

        <p>
            Data Science is the field of extracting useful
            information and knowledge from data using statistics,
            programming, mathematics and analytical techniques.
        </p>

        <h3>2. Types of Data</h3>

        <ul>
            <li>Structured Data</li>
            <li>Unstructured Data</li>
            <li>Semi-structured Data</li>
        </ul>

        <h3>3. Data Science Process</h3>

        <ol>
            <li>Collect data</li>
            <li>Clean data</li>
            <li>Explore data</li>
            <li>Analyze data</li>
            <li>Visualize data</li>
            <li>Build models</li>
            <li>Communicate results</li>
        </ol>

        <h3>4. Technologies Used</h3>

        <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Matplotlib</li>
            <li>Machine Learning</li>
        </ul>

        <h3>5. Applications</h3>

        <ul>
            <li>Business analytics</li>
            <li>Healthcare</li>
            <li>Finance</li>
            <li>Recommendation systems</li>
            <li>Fraud detection</li>
            <li>Predictive analytics</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Data Science helps organizations turn raw data into
            meaningful information for decision-making.
        </p>
        `,


        `
        <h2>Chapter 2: Data Collection and Cleaning</h2>

        <h3>1. Data Collection</h3>

        <p>
            Data can be collected from databases, websites,
            surveys, sensors, APIs and files.
        </p>

        <h3>2. Common Data Formats</h3>

        <ul>
            <li>CSV</li>
            <li>Excel</li>
            <li>JSON</li>
            <li>SQL databases</li>
        </ul>

        <h3>3. Missing Data</h3>

        <p>
            Missing values can occur when information is not
            available or was not recorded.
        </p>

        <h3>4. Handling Missing Values</h3>

        <ul>
            <li>Remove missing rows</li>
            <li>Fill with mean</li>
            <li>Fill with median</li>
            <li>Fill with mode</li>
            <li>Use a suitable prediction method</li>
        </ul>

        <h3>5. Removing Duplicates</h3>

        <p>
            Duplicate records can produce incorrect analysis and
            should be identified and handled.
        </p>

        <h3>6. Data Transformation</h3>

        <p>
            Data may need to be converted into a suitable format
            before analysis.
        </p>

        <h3>Conclusion</h3>

        <p>
            Clean and reliable data is important for producing
            accurate analytical results.
        </p>
        `,


        `
        <h2>Chapter 3: Python for Data Analysis</h2>

        <h3>1. Python</h3>

        <p>
            Python is widely used in Data Science because it has
            many libraries for data processing and analysis.
        </p>

        <h3>2. NumPy</h3>

        <p>
            NumPy provides support for numerical operations and
            arrays.
        </p>

        <pre><code>import numpy as np

numbers = np.array([10, 20, 30])

print(numbers)</code></pre>

        <h3>3. Pandas</h3>

        <p>
            Pandas provides data structures such as Series and
            DataFrame for working with tabular data.
        </p>

        <pre><code>import pandas as pd

data = {
    "Name": ["A", "B", "C"],
    "Marks": [80, 90, 75]
}

df = pd.DataFrame(data)

print(df)</code></pre>

        <h3>4. Reading CSV</h3>

        <pre><code>df = pd.read_csv("data.csv")

print(df.head())</code></pre>

        <h3>5. Selecting Data</h3>

        <pre><code>print(df["Marks"])</code></pre>

        <h3>6. Descriptive Statistics</h3>

        <pre><code>print(df.describe())</code></pre>

        <h3>Conclusion</h3>

        <p>
            Python libraries make it easier to process and analyze
            large datasets.
        </p>
        `,


        `
        <h2>Chapter 4: Statistics and Exploratory Data Analysis</h2>

        <h3>1. What is Statistics?</h3>

        <p>
            Statistics involves collecting, organizing,
            analyzing and interpreting data.
        </p>

        <h3>2. Mean</h3>

        <p>
            Mean is the average value of a set of observations.
        </p>

        <pre><code>Mean =
Sum of all values / Number of values</code></pre>

        <h3>3. Median</h3>

        <p>
            Median is the middle value after arranging data in
            order.
        </p>

        <h3>4. Mode</h3>

        <p>
            Mode is the value that appears most frequently.
        </p>

        <h3>5. Range</h3>

        <p>
            Range is the difference between the maximum and
            minimum values.
        </p>

        <h3>6. Exploratory Data Analysis</h3>

        <p>
            Exploratory Data Analysis, or EDA, is used to
            understand patterns, relationships and unusual
            values in a dataset.
        </p>

        <h3>7. Correlation</h3>

        <p>
            Correlation measures the relationship between
            variables.
        </p>

        <h3>Conclusion</h3>

        <p>
            Statistics and EDA help data scientists understand
            datasets before building predictive models.
        </p>
        `,


        `
        <h2>Chapter 5: Data Visualization</h2>

        <h3>1. What is Data Visualization?</h3>

        <p>
            Data visualization represents information using
            charts, graphs and plots.
        </p>

        <h3>2. Bar Chart</h3>

        <p>
            Bar charts are useful for comparing categories.
        </p>

        <h3>3. Line Chart</h3>

        <p>
            Line charts are useful for showing changes over time.
        </p>

        <h3>4. Pie Chart</h3>

        <p>
            Pie charts show how different categories contribute
            to a whole.
        </p>

        <h3>5. Histogram</h3>

        <p>
            Histograms show the distribution of numerical data.
        </p>

        <h3>6. Matplotlib Example</h3>

        <pre><code>import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 15, 25]

plt.plot(x, y)

plt.xlabel("X")
plt.ylabel("Y")

plt.show()</code></pre>

        <h3>Conclusion</h3>

        <p>
            Visualization makes complex datasets easier to
            understand and communicate.
        </p>
        `,


        `
        <h2>Chapter 6: Mini Data Science Project</h2>

        <h3>1. Project Idea</h3>

        <p>
            A simple student marks analysis system can be used
            as a beginner Data Science project.
        </p>

        <h3>2. Dataset</h3>

        <p>
            The dataset can contain student names, subjects,
            marks, attendance and total scores.
        </p>

        <h3>3. Project Steps</h3>

        <ol>
            <li>Collect the dataset</li>
            <li>Load the dataset using Pandas</li>
            <li>Clean missing values</li>
            <li>Analyze the data</li>
            <li>Create visualizations</li>
            <li>Find useful patterns</li>
            <li>Present the results</li>
        </ol>

        <h3>4. Example</h3>

        <pre><code>import pandas as pd

df = pd.read_csv("students.csv")

print(df.head())
print(df.describe())</code></pre>

        <h3>5. Expected Outcome</h3>

        <p>
            The project can identify average marks, highest
            marks, lowest marks and subject-wise performance.
        </p>

        <h3>Conclusion</h3>

        <p>
            A Data Science project combines data collection,
            cleaning, analysis and visualization to solve a
            practical problem.
        </p>
        `
    ],


    /* =====================================================
       ARTIFICIAL INTELLIGENCE
       ===================================================== */

    ai: [

        `
        <h2>Chapter 1: Introduction to Artificial Intelligence</h2>

        <h3>1. What is Artificial Intelligence?</h3>

        <p>
            Artificial Intelligence, or AI, is a field of computer
            science concerned with creating systems that can
            perform tasks that normally require human intelligence.
        </p>

        <h3>2. Examples of AI</h3>

        <ul>
            <li>Voice assistants</li>
            <li>Recommendation systems</li>
            <li>Image recognition</li>
            <li>Chatbots</li>
            <li>Self-driving technologies</li>
            <li>Fraud detection</li>
        </ul>

        <h3>3. Types of AI</h3>

        <ul>
            <li>Narrow AI</li>
            <li>General AI</li>
            <li>Superintelligent AI</li>
        </ul>

        <h3>4. AI and Machine Learning</h3>

        <p>
            Machine Learning is a major area of AI in which
            systems learn patterns from data.
        </p>

        <h3>5. Applications</h3>

        <ul>
            <li>Healthcare</li>
            <li>Finance</li>
            <li>Education</li>
            <li>Robotics</li>
            <li>Cybersecurity</li>
            <li>Transportation</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            AI allows computer systems to perform intelligent
            tasks and solve complex problems.
        </p>
        `,


        `
        <h2>Chapter 2: Intelligent Agents and Problem Solving</h2>

        <h3>1. Intelligent Agent</h3>

        <p>
            An intelligent agent is a system that observes its
            environment and performs actions to achieve a goal.
        </p>

        <h3>2. Components of an Agent</h3>

        <ul>
            <li>Sensors</li>
            <li>Environment</li>
            <li>Decision-making system</li>
            <li>Actuators</li>
        </ul>

        <h3>3. Examples</h3>

        <p>
            A robot can use sensors to understand its environment
            and actuators to move.
        </p>

        <h3>4. Problem Solving</h3>

        <p>
            AI systems can represent problems as states and
            actions and search for solutions.
        </p>

        <h3>5. State Space</h3>

        <p>
            A state space represents all possible states that
            can occur while solving a problem.
        </p>

        <h3>6. Goal State</h3>

        <p>
            The goal state is the desired final state of a
            problem-solving process.
        </p>

        <h3>Conclusion</h3>

        <p>
            Intelligent agents interact with their environment
            and use reasoning or learning to achieve goals.
        </p>
        `,


        `
        <h2>Chapter 3: Search and Knowledge Representation</h2>

        <h3>1. Search in AI</h3>

        <p>
            Search algorithms explore possible solutions to
            find an appropriate path or answer.
        </p>

        <h3>2. Breadth-First Search</h3>

        <p>
            Breadth-First Search explores nodes level by level.
            It is useful when finding the shortest path in an
            unweighted graph.
        </p>

        <h3>3. Depth-First Search</h3>

        <p>
            Depth-First Search explores one branch as deeply as
            possible before moving to another branch.
        </p>

        <h3>4. Heuristic Search</h3>

        <p>
            Heuristic methods use additional information to
            guide the search toward a solution.
        </p>

        <h3>5. Knowledge Representation</h3>

        <p>
            Knowledge representation is the process of storing
            information in a form that an AI system can use.
        </p>

        <h3>6. Examples</h3>

        <ul>
            <li>Rules</li>
            <li>Facts</li>
            <li>Knowledge graphs</li>
            <li>Semantic networks</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Search helps AI systems find solutions while
            knowledge representation helps them store and
            use information.
        </p>
        `,


        `
        <h2>Chapter 4: Machine Learning Basics</h2>

        <h3>1. What is Machine Learning?</h3>

        <p>
            Machine Learning is a branch of AI that enables
            computers to learn patterns from data.
        </p>

        <h3>2. Supervised Learning</h3>

        <p>
            Supervised learning uses labeled data to train a
            model.
        </p>

        <p>
            Examples include classification and regression.
        </p>

        <h3>3. Unsupervised Learning</h3>

        <p>
            Unsupervised learning works with data without
            predefined labels.
        </p>

        <p>
            Clustering is a common unsupervised learning task.
        </p>

        <h3>4. Reinforcement Learning</h3>

        <p>
            Reinforcement learning involves an agent learning
            through rewards and penalties.
        </p>

        <h3>5. Training and Testing</h3>

        <p>
            A dataset is commonly divided into training and
            testing portions to evaluate model performance.
        </p>

        <h3>6. Model Evaluation</h3>

        <ul>
            <li>Accuracy</li>
            <li>Precision</li>
            <li>Recall</li>
            <li>F1-score</li>
            <li>Mean Squared Error</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Machine Learning allows systems to learn from
            examples and make predictions or decisions.
        </p>
        `,


        `
        <h2>Chapter 5: Neural Networks and Deep Learning</h2>

        <h3>1. Neural Networks</h3>

        <p>
            Neural networks are computational models inspired
            by the way biological neural systems process
            information.
        </p>

        <h3>2. Neurons</h3>

        <p>
            An artificial neuron receives inputs, applies
            weights and produces an output.
        </p>

        <h3>3. Layers</h3>

        <ul>
            <li>Input layer</li>
            <li>Hidden layers</li>
            <li>Output layer</li>
        </ul>

        <h3>4. Activation Functions</h3>

        <p>
            Activation functions help neural networks learn
            complex relationships.
        </p>

        <p>
            Common examples include ReLU, sigmoid and softmax.
        </p>

        <h3>5. Deep Learning</h3>

        <p>
            Deep Learning uses neural networks with multiple
            layers to learn complex patterns.
        </p>

        <h3>6. Applications</h3>

        <ul>
            <li>Image recognition</li>
            <li>Speech recognition</li>
            <li>Natural language processing</li>
            <li>Computer vision</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Neural networks and deep learning are important
            technologies behind many modern AI systems.
        </p>
        `,


        `
        <h2>Chapter 6: AI Applications, Ethics and Mini Project</h2>

        <h3>1. AI Applications</h3>

        <ul>
            <li>Healthcare diagnosis support</li>
            <li>Chatbots</li>
            <li>Recommendation systems</li>
            <li>Fraud detection</li>
            <li>Image classification</li>
            <li>Autonomous systems</li>
        </ul>

        <h3>2. AI Ethics</h3>

        <p>
            AI systems should be developed and used responsibly.
            Important concerns include fairness, privacy,
            transparency and accountability.
        </p>

        <h3>3. Bias</h3>

        <p>
            AI models can produce biased results when their
            training data or design contains bias.
        </p>

        <h3>4. Mini Project</h3>

        <p>
            A beginner AI project can be a simple student
            performance prediction system.
        </p>

        <h3>5. Project Workflow</h3>

        <ol>
            <li>Collect data</li>
            <li>Clean data</li>
            <li>Select useful features</li>
            <li>Train a model</li>
            <li>Test the model</li>
            <li>Evaluate the result</li>
        </ol>

        <h3>Conclusion</h3>

        <p>
            AI has many useful applications, but it should be
            designed and used responsibly.
        </p>
        `
    ],


    /* =====================================================
       JAVA PROGRAMMING
       ===================================================== */

    java: [

        `
        <h2>Chapter 1: Introduction to Java</h2>

        <h3>1. What is Java?</h3>

        <p>
            Java is a high-level, object-oriented programming
            language widely used to develop different types
            of applications.
        </p>

        <h3>2. Features of Java</h3>

        <ul>
            <li>Object-oriented</li>
            <li>Platform independent</li>
            <li>Secure</li>
            <li>Robust</li>
            <li>Multithreaded</li>
            <li>Portable</li>
        </ul>

        <h3>3. JVM</h3>

        <p>
            JVM stands for Java Virtual Machine. It executes
            Java bytecode.
        </p>

        <h3>4. JDK</h3>

        <p>
            JDK stands for Java Development Kit. It contains
            tools required for developing Java programs.
        </p>

        <h3>5. JRE</h3>

        <p>
            JRE provides the environment required to run Java
            applications.
        </p>

        <h3>6. First Java Program</h3>

        <pre><code>class Main {

    public static void main(String[] args) {

        System.out.println("Hello, World!");

    }
}</code></pre>

        <h3>Conclusion</h3>

        <p>
            Java is a powerful object-oriented language used
            for many types of software development.
        </p>
        `,


        `
        <h2>Chapter 2: Variables, Data Types and Operators</h2>

        <h3>1. Variables</h3>

        <p>
            Variables store values that can be used by a program.
        </p>

        <pre><code>int age = 20;
double price = 99.50;
String name = "Sai";</code></pre>

        <h3>2. Primitive Data Types</h3>

        <ul>
            <li>byte</li>
            <li>short</li>
            <li>int</li>
            <li>long</li>
            <li>float</li>
            <li>double</li>
            <li>char</li>
            <li>boolean</li>
        </ul>

        <h3>3. Arithmetic Operators</h3>

        <pre><code>int a = 10;
int b = 5;

System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println(a / b);</code></pre>

        <h3>4. Comparison Operators</h3>

        <p>
            Comparison operators compare values and produce
            boolean results.
        </p>

        <h3>5. Logical Operators</h3>

        <p>
            Java provides logical AND, OR and NOT operators.
        </p>

        <h3>6. Type Casting</h3>

        <pre><code>double value = 10.5;
int number = (int) value;</code></pre>

        <h3>Conclusion</h3>

        <p>
            Variables, data types and operators are fundamental
            parts of Java programming.
        </p>
        `,


        `
        <h2>Chapter 3: Conditional Statements and Loops</h2>

        <h3>1. if Statement</h3>

        <pre><code>int age = 20;

if (age &gt;= 18) {
    System.out.println("Adult");
}</code></pre>

        <h3>2. if-else</h3>

        <pre><code>if (age &gt;= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}</code></pre>

        <h3>3. else-if</h3>

        <pre><code>int marks = 80;

if (marks &gt;= 90) {
    System.out.println("A+");
} else if (marks &gt;= 75) {
    System.out.println("A");
} else {
    System.out.println("B");
}</code></pre>

        <h3>4. switch</h3>

        <pre><code>int day = 1;

switch (day) {

    case 1:
        System.out.println("Monday");
        break;

    case 2:
        System.out.println("Tuesday");
        break;

    default:
        System.out.println("Other day");
}</code></pre>

        <h3>5. for Loop</h3>

        <pre><code>for (int i = 1; i &lt;= 5; i++) {
    System.out.println(i);
}</code></pre>

        <h3>6. while Loop</h3>

        <pre><code>int i = 1;

while (i &lt;= 5) {
    System.out.println(i);
    i++;
}</code></pre>

        <h3>7. break and continue</h3>

        <p>
            break stops a loop while continue skips the current
            iteration and moves to the next one.
        </p>

        <h3>Conclusion</h3>

        <p>
            Conditional statements and loops allow Java programs
            to make decisions and repeat operations.
        </p>
        `,


        `
        <h2>Chapter 4: Classes, Objects and OOP</h2>

        <h3>1. Object-Oriented Programming</h3>

        <p>
            Object-Oriented Programming organizes programs around
            objects and classes.
        </p>

        <h3>2. Class</h3>

        <p>
            A class is a blueprint for creating objects.
        </p>

        <pre><code>class Student {

    String name;
    int age;

}</code></pre>

        <h3>3. Object</h3>

        <pre><code>Student s1 = new Student();

s1.name = "Sai";
s1.age = 20;</code></pre>

        <h3>4. Method</h3>

        <pre><code>class Student {

    void display() {
        System.out.println("Student");
    }
}</code></pre>

        <h3>5. Constructor</h3>

        <p>
            A constructor is used to initialize an object when
            it is created.
        </p>

        <pre><code>class Student {

    Student() {
        System.out.println("Object created");
    }
}</code></pre>

        <h3>6. Encapsulation</h3>

        <p>
            Encapsulation combines data and methods inside a
            class and can restrict direct access to data.
        </p>

        <h3>Conclusion</h3>

        <p>
            Classes and objects form the foundation of
            object-oriented Java programming.
        </p>
        `,


        `
        <h2>Chapter 5: Inheritance, Polymorphism and Interfaces</h2>

        <h3>1. Inheritance</h3>

        <p>
            Inheritance allows one class to acquire properties
            and methods from another class.
        </p>

        <pre><code>class Animal {

    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

}</code></pre>

        <h3>2. Polymorphism</h3>

        <p>
            Polymorphism means one interface or method can
            represent different forms of behavior.
        </p>

        <h3>3. Method Overloading</h3>

        <pre><code>void add(int a, int b) {
}

void add(int a, int b, int c) {
}</code></pre>

        <h3>4. Method Overriding</h3>

        <p>
            Method overriding occurs when a subclass provides
            its own implementation of a parent method.
        </p>

        <h3>5. Interface</h3>

        <p>
            An interface defines a contract that implementing
            classes can follow.
        </p>

        <pre><code>interface Vehicle {

    void start();

}

class Car implements Vehicle {

    public void start() {
        System.out.println("Car started");
    }
}</code></pre>

        <h3>Conclusion</h3>

        <p>
            Inheritance, polymorphism and interfaces support
            reusable and flexible Java programs.
        </p>
        `,


        `
        <h2>Chapter 6: Exception Handling, Collections and Mini Project</h2>

        <h3>1. Exception Handling</h3>

        <p>
            Exception handling allows programs to deal with
            unexpected situations without terminating abruptly.
        </p>

        <pre><code>try {

    int result = 10 / 0;

} catch (ArithmeticException e) {

    System.out.println("Cannot divide by zero");

}</code></pre>

        <h3>2. Collections</h3>

        <p>
            Java Collections provide classes and interfaces for
            storing and processing groups of objects.
        </p>

        <ul>
            <li>ArrayList</li>
            <li>LinkedList</li>
            <li>HashSet</li>
            <li>HashMap</li>
        </ul>

        <h3>3. ArrayList</h3>

        <pre><code>import java.util.ArrayList;

ArrayList&lt;String&gt; names =
    new ArrayList&lt;&gt;();

names.add("Sai");
names.add("Rahul");

System.out.println(names);</code></pre>

        <h3>4. Mini Project</h3>

        <p>
            A simple Student Management System can be developed
            using Java classes, objects, collections and
            exception handling.
        </p>

        <h3>5. Project Features</h3>

        <ul>
            <li>Add student</li>
            <li>View student</li>
            <li>Update student</li>
            <li>Delete student</li>
            <li>Search student</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Java provides powerful object-oriented features,
            exception handling and collection frameworks for
            building real-world applications.
        </p>
        `
    ],


    /* =====================================================
       DATABASE MANAGEMENT
       ===================================================== */

    database: [

        `
        <h2>Chapter 1: Introduction to Databases</h2>

        <h3>1. What is a Database?</h3>

        <p>
            A database is an organized collection of information
            that can be stored, managed and retrieved efficiently.
        </p>

        <h3>2. DBMS</h3>

        <p>
            DBMS stands for Database Management System. It is
            software used to create, store, update and manage
            databases.
        </p>

        <h3>3. Examples of DBMS</h3>

        <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Oracle Database</li>
            <li>Microsoft SQL Server</li>
        </ul>

        <h3>4. Advantages of Databases</h3>

        <ul>
            <li>Data organization</li>
            <li>Data security</li>
            <li>Reduced redundancy</li>
            <li>Easy data retrieval</li>
            <li>Data consistency</li>
        </ul>

        <h3>5. Database Users</h3>

        <p>
            Database administrators, developers, analysts and
            applications can interact with databases.
        </p>

        <h3>Conclusion</h3>

        <p>
            Databases provide an efficient way to store and
            manage large amounts of information.
        </p>
        `,


        `
        <h2>Chapter 2: Relational Model and SQL Basics</h2>

        <h3>1. Relational Database</h3>

        <p>
            A relational database stores data in tables made up
            of rows and columns.
        </p>

        <h3>2. Table</h3>

        <p>
            A table represents a collection of related records.
        </p>

        <h3>3. Row</h3>

        <p>
            A row represents one record in a table.
        </p>

        <h3>4. Column</h3>

        <p>
            A column represents a particular attribute.
        </p>

        <h3>5. Primary Key</h3>

        <p>
            A primary key uniquely identifies each record in
            a table.
        </p>

        <h3>6. Creating a Table</h3>

        <pre><code>CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);</code></pre>

        <h3>7. INSERT</h3>

        <pre><code>INSERT INTO students
VALUES (1, 'Sai', 20);</code></pre>

        <h3>8. SELECT</h3>

        <pre><code>SELECT * FROM students;</code></pre>

        <h3>Conclusion</h3>

        <p>
            SQL provides commands for creating and interacting
            with relational databases.
        </p>
        `,


        `
        <h2>Chapter 3: CRUD and Advanced SQL</h2>

        <h3>1. CRUD</h3>

        <p>
            CRUD stands for Create, Read, Update and Delete.
        </p>

        <h3>2. CREATE</h3>

        <pre><code>INSERT INTO students
VALUES (2, 'Rahul', 21);</code></pre>

        <h3>3. READ</h3>

        <pre><code>SELECT * FROM students;</code></pre>

        <h3>4. UPDATE</h3>

        <pre><code>UPDATE students
SET age = 22
WHERE id = 2;</code></pre>

        <h3>5. DELETE</h3>

        <pre><code>DELETE FROM students
WHERE id = 2;</code></pre>

        <h3>6. WHERE</h3>

        <pre><code>SELECT *
FROM students
WHERE age &gt; 18;</code></pre>

        <h3>7. ORDER BY</h3>

        <pre><code>SELECT *
FROM students
ORDER BY age DESC;</code></pre>

        <h3>8. GROUP BY</h3>

        <pre><code>SELECT age, COUNT(*)
FROM students
GROUP BY age;</code></pre>

        <h3>9. JOIN</h3>

        <p>
            JOIN operations combine related data from multiple
            tables.
        </p>

        <h3>Conclusion</h3>

        <p>
            SQL allows users to perform basic CRUD operations
            as well as advanced data analysis.
        </p>
        `,


        `
        <h2>Chapter 4: Normalization and Database Design</h2>

        <h3>1. What is Normalization?</h3>

        <p>
            Normalization is the process of organizing database
            tables to reduce unnecessary duplication and improve
            data consistency.
        </p>

        <h3>2. First Normal Form</h3>

        <p>
            First Normal Form requires atomic values and avoids
            repeating groups.
        </p>

        <h3>3. Second Normal Form</h3>

        <p>
            Second Normal Form builds on 1NF and removes partial
            dependency on part of a composite key.
        </p>

        <h3>4. Third Normal Form</h3>

        <p>
            Third Normal Form removes inappropriate transitive
            dependencies.
        </p>

        <h3>5. Relationships</h3>

        <ul>
            <li>One-to-One</li>
            <li>One-to-Many</li>
            <li>Many-to-Many</li>
        </ul>

        <h3>6. Foreign Key</h3>

        <p>
            A foreign key connects a table with another table
            using a related key.
        </p>

        <pre><code>CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200),
    category_id INT,
    FOREIGN KEY (category_id)
    REFERENCES categories(category_id)
);</code></pre>

        <h3>Conclusion</h3>

        <p>
            Proper database design improves consistency,
            maintainability and reliability.
        </p>
        `,


        `
        <h2>Chapter 5: Transactions, Concurrency and Security</h2>

        <h3>1. Transactions</h3>

        <p>
            A transaction is a group of database operations that
            should be treated as a single logical unit.
        </p>

        <h3>2. ACID Properties</h3>

        <ul>
            <li>Atomicity</li>
            <li>Consistency</li>
            <li>Isolation</li>
            <li>Durability</li>
        </ul>

        <h3>3. COMMIT</h3>

        <pre><code>COMMIT;</code></pre>

        <p>
            COMMIT permanently saves transaction changes.
        </p>

        <h3>4. ROLLBACK</h3>

        <pre><code>ROLLBACK;</code></pre>

        <p>
            ROLLBACK cancels changes made during a transaction
            that has not been committed.
        </p>

        <h3>5. Concurrency</h3>

        <p>
            Concurrency occurs when multiple users or processes
            access database data at the same time.
        </p>

        <h3>6. Database Security</h3>

        <ul>
            <li>User authentication</li>
            <li>Authorization</li>
            <li>Roles and permissions</li>
            <li>Backups</li>
            <li>Access control</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Transactions and security help databases maintain
            reliable and protected information.
        </p>
        `,


        `
        <h2>Chapter 6: NoSQL, MongoDB and Digital Library Mini Project</h2>

        <h3>1. What is NoSQL?</h3>

        <p>
            NoSQL databases are designed to store and process
            data using models other than traditional relational
            tables.
        </p>

        <h3>2. MongoDB</h3>

        <p>
            MongoDB is a document-oriented NoSQL database that
            stores data in flexible document structures.
        </p>

        <h3>3. MongoDB Document Example</h3>

        <pre><code>{
    "title": "Python Programming",
    "author": "Digital Library Team",
    "category": "Computer Science"
}</code></pre>

        <h3>4. Digital Library Database</h3>

        <p>
            A digital library database can contain information
            about books, users, categories, authors and borrowing
            records.
        </p>

        <h3>5. Possible Tables</h3>

        <ul>
            <li>Users</li>
            <li>Books</li>
            <li>Authors</li>
            <li>Categories</li>
            <li>Borrowing Records</li>
        </ul>

        <h3>6. Project Operations</h3>

        <ul>
            <li>Add books</li>
            <li>Search books</li>
            <li>Update book information</li>
            <li>Delete books</li>
            <li>Register users</li>
            <li>Track book availability</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
            Database technologies form the foundation of a
            Digital Library Management System and allow the
            application to store, retrieve and manage information.
        </p>
        `
    ]

};


/* =========================================================
   5. CURRENT CHAPTER
   ========================================================= */

let currentChapter = 1;

const totalChapters = 6;


/* =========================================================
   6. LOAD BOOK READER
   ========================================================= */

function loadBookReader() {

    const params = new URLSearchParams(window.location.search);

    const book = params.get("book");

    const bookTitles = {

        python: "Python Programming",

        web: "Web Development",

        data: "Data Science",

        ai: "Artificial Intelligence",

        java: "Java Programming",

        database: "Database Management"
    };

    if (!book || !bookTitles[book]) {
        return;
    }

    const readerTitle =
        document.getElementById("readerTitle");

    if (readerTitle) {
        readerTitle.textContent =
            bookTitles[book];
    }

    currentChapter = 1;

    showChapter();
}


/* =========================================================
   7. SHOW CHAPTER
   ========================================================= */

function showChapter() {

    const params = new URLSearchParams(window.location.search);

    const book = params.get("book");

    const chapterContent =
        document.getElementById("chapterContent");

    if (!chapterContent) {
        return;
    }

    if (!bookChapters[book]) {

        chapterContent.innerHTML = `
            <h2>Book Not Found</h2>

            <p>
                The selected book could not be found.
            </p>
        `;

        return;
    }

    const chapters = bookChapters[book];

    if (
        currentChapter < 1 ||
        currentChapter > chapters.length
    ) {
        return;
    }

    chapterContent.innerHTML =
        chapters[currentChapter - 1];

    updateChapterButtons();

    updateReadingProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   8. PREVIOUS CHAPTER
   ========================================================= */

function previousChapter() {

    if (currentChapter > 1) {

        currentChapter--;

        showChapter();
    }
}


/* =========================================================
   9. NEXT CHAPTER
   ========================================================= */

function nextChapter() {

    if (currentChapter < totalChapters) {

        currentChapter++;

        showChapter();
    }
}


/* =========================================================
   10. UPDATE CHAPTER BUTTONS
   ========================================================= */

function updateChapterButtons() {

    const previousButton =
        document.getElementById("previousChapter");

    const nextButton =
        document.getElementById("nextChapter");

    if (previousButton) {

        previousButton.disabled =
            currentChapter === 1;
    }

    if (nextButton) {

        nextButton.disabled =
            currentChapter === totalChapters;
    }
}


/* =========================================================
   11. READING PROGRESS
   ========================================================= */

function updateReadingProgress() {

    const progressBar =
        document.getElementById("readingProgress");

    if (!progressBar) {
        return;
    }

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight;

    const windowHeight =
        window.innerHeight;

    const scrollableHeight =
        documentHeight - windowHeight;

    if (scrollableHeight <= 0) {

        progressBar.style.width = "100%";

        return;
    }

    const progress =
        (scrollTop / scrollableHeight) * 100;

    progressBar.style.width =
        Math.min(progress, 100) + "%";
}


/* =========================================================
   12. SCROLL EVENT
   ========================================================= */

window.addEventListener(
    "scroll",
    updateReadingProgress
);


/* =========================================================
   13. PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Book details page
         */
        if (
            document.getElementById("bookTitle")
        ) {

            loadBookDetails();
        }


        /*
         * Book reader page
         */
        if (
            document.getElementById("chapterContent")
        ) {

            loadBookReader();
        }


        /*
         * Search input - allow Enter key
         */
        const searchInput =
            document.getElementById("searchInput");

        if (searchInput) {

            searchInput.addEventListener(
                "keypress",
                function(event) {

                    if (event.key === "Enter") {

                        searchBooks();
                    }
                }
            );
        }


        /*
         * Initial progress
         */
        updateReadingProgress();
    }
);