-- Connect to the default database
\connect postgres

-- Create the new database
CREATE DATABASE aenzbi_db;

-- Create a new user
CREATE USER aenzbi_user WITH PASSWORD 'yourpassword';

-- Grant privileges to the new user on the new database
GRANT ALL PRIVILEGES ON DATABASE aenzbi_db TO aenzbi_user;

-- Connect to the new database
\c aenzbi_db

-- Create tables and schema (example table)
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Optionally, add more table definitions or initial data here