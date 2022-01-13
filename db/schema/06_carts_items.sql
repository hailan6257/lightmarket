DROP TABLE IF EXISTS cart_items CASCADE;

CREATE TABLE cart_items (
id SERIAL PRIMARY KEY NOT NULL,
user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
);
