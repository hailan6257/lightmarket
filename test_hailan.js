// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();



// const addProduct = (product) => {
//   return db
//     .query(`INSERT INTO products (id, name, seller_id, price, sold, description, url)
//     VALUES ($1, $2, $3, $4, $5, $6, $7);`, [product.id, product.name, product.seller_id, product.price, product.sold, product.description, product.url]
//     )
//     .then((result) => {
//       console.log(result.rows[0]);
//       return result.rows[0];
//     })
//     .catch(err => console.log(err));
// };
// const product = {
//   'id':'110',
//   'name': 'mask101',
//   'seller_id':'1',
//   'price': '3.99',
//   'sold': 'false',
//   'description': 'test',
//   'url': 'https://unsplash.com/photos/u4gX3FWzchM'
// };
// addProduct(product);

// const getAllProducts = () => {
//   return db
//     .query(`SELECT *
//   FROM products`)
//     .then((result) => {
//       console.log(result.rows);
//       return result.rows;
//     });
// };

// getAllProducts();

// const getProductById = (id) => {
//   return db
//     .query(`SELECT *
//   FROM products
//   WHERE id = $1`, [id])
//     .then((result) => {
//       console.log(`result:`, result.rows[0]);
//       return result.rows[0];
//     });
// };

// getProductById(110);


// const getWishProductsByUserId  = (id) => {
//   return db
//     .query(`SELECT products.name as product_name, users.username as name
//   FROM wish_items
//   JOIN products ON  product_id = products.id
//   JOIN users ON user_id = users.id
//   WHERE users.id = $1`, [id])
//     .then((result) => {
//       console.log(`result:`, result.rows);
//       return result.rows;
//     });
// };
// getWishProductsByUserId(2);

// const getOrdersProductsByUserId = (id) => {
//   return db
//     .query(`SELECT * FROM products
//             JOIN order_items ON products.id = product_id
//             JOIN orders ON orders.id = order_id
//             WHERE orders.user_id = $1`,[id])
//     .then((response) => {
//       console.log(`result:`, response.rows);
//       return response.rows;
//     });
// };

// getOrdersProductsByUserId(2);

const getProductsByFilter = (minPrice, maxPrice) => {
  //if (minPrice && maxPrice) {
  return db
    .query(`SELECT * FROM products
            WHERE price >= minPrice AND price <= maxPrice`)
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};