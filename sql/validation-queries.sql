-- ============================================
-- QA Portfolio Project: SQL for Database Validation
-- Run with SQLite: sqlite3 qa_practice.db < validation-queries.sql
-- ============================================

-- 1. Schema setup: simulate an orders system similar to what you'd validate
--    behind an e-commerce app like SauceDemo

CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    product_id INTEGER PRIMARY KEY,
    product_name TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    order_date TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS order_items (
    order_item_id INTEGER PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- 2. Sample data

INSERT INTO users (user_id, username, email) VALUES
    (1, 'standard_user', 'standard@example.com'),
    (2, 'problem_user', 'problem@example.com');

INSERT INTO products (product_id, product_name, price) VALUES
    (1, 'Sauce Labs Backpack', 29.99),
    (2, 'Sauce Labs Bike Light', 9.99),
    (3, 'Sauce Labs Bolt T-Shirt', 15.99);

INSERT INTO orders (order_id, user_id, order_date) VALUES
    (1, 1, '2026-08-01'),
    (2, 1, '2026-08-05'),
    (3, 2, '2026-08-06');

INSERT INTO order_items (order_item_id, order_id, product_id, quantity) VALUES
    (1, 1, 1, 1),
    (2, 1, 2, 2),
    (3, 2, 3, 1),
    (4, 3, 1, 1);

-- ============================================
-- 3. Example QA validation queries
-- ============================================

-- a) Validate: "How many orders does standard_user have?"
--    (Compare this count against what the UI displays for that user)
SELECT COUNT(*) AS order_count
FROM orders
WHERE user_id = (SELECT user_id FROM users WHERE username = 'standard_user');

-- b) Validate: order total for order_id = 1 matches what checkout summary shows
SELECT o.order_id, SUM(p.price * oi.quantity) AS calculated_total
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
WHERE o.order_id = 1
GROUP BY o.order_id;

-- c) Validate: find any order_items referencing a product that doesn't exist
--    (data integrity check - useful for catching orphaned records)
SELECT oi.*
FROM order_items oi
LEFT JOIN products p ON oi.product_id = p.product_id
WHERE p.product_id IS NULL;

-- d) Validate: list all products ordered by a specific user (join across 3 tables)
SELECT u.username, p.product_name, oi.quantity
FROM users u
JOIN orders o ON u.user_id = o.user_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
WHERE u.username = 'standard_user';

-- e) Validate: total revenue across all orders (e.g. matches an admin dashboard figure)
SELECT SUM(p.price * oi.quantity) AS total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id;
