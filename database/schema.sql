CREATE DATABASE IF NOT EXISTS digital_library;

USE digital_library;

-- 1. Users table
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user'
);

-- 2. Books table
CREATE TABLE IF NOT EXISTS books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    availability VARCHAR(20) DEFAULT 'Available'
);

-- 3. Borrowings table
CREATE TABLE IF NOT EXISTS borrowings (
    borrowing_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    borrowed_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    returned_date DATETIME NULL,
    status VARCHAR(20) DEFAULT 'Borrowed',

    FOREIGN KEY (user_id)
        REFERENCES users(user_id),

    FOREIGN KEY (book_id)
        REFERENCES books(book_id)
);