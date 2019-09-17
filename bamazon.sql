DROP DATABASE bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR(255) NOT NULL,
	price DECIMAL(8,2) NOT NULL,
	stock_quantity INT NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES
	(12345, 'Jordan 1 High Tops', 'shoes', 299.99, 5),
	(70700, 'Rolex watch', 'accessories', 100.79, 45),
	(38883, 'Gucci Slip-Ons', 'shoes', 45.99, 90),
	(29054, 'Patagonia Pullover', 'clothing', 89.99, 150),
	(76543, 'Vans Sk8 Mid Tops', 'shoes', 49.99, 85),
	(10001, 'Autographed Kobe Bryant Jersey', 'clothing', 810.24, 2),
	(59444, 'Burberry scarf', 'accessories', 32.99, 50),
	(77777, 'Popcorn', 'food', 7.99, 120),
	(90843, 'Nike SB Dunks', 'shoes', 99.99, 70),
	(45242, 'Peanut Butter', 'food', 5.99, 180);

SHOW TABLES
