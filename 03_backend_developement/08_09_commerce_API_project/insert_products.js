const request = require("request");
const PG = require("pg");

const { Pool } = require('pg');

const pool = new Pool();

function readProducts(){


  // lecture de tous les produits
  return request(
    {
      url: "https://decath-product-api.herokuapp.com/products",
      method: "GET",
      headers: {"content-type":"application/json"},
    },
    function(error, response, result) {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("result:", result); // Print the HTML for the Google homepage.

      const reponseJSON = JSON.parse(result);
      // insertion de chaque objet en bdd

      // console.log ( reponseJSON.length );
      // const client = new PG.Client();
      // client.connect();
      reponseJSON.forEach(insertProduct);
      // client.end();

    }
  );

}


// reçoit un objet product et l'insere en bdd dans table "products"
function insertProduct(product){

  pool.query(
    "INSERT INTO products (id, decathlon_id, title, description, brand_id, min_price, max_price, crossed_price, percent_reduction, image_path, rating) VALUES ($1::uuid, $2::text, $3::text, $4::text, $5::uuid, $6::float, $7::float, $8::float, $9:: integer, $10::text, $11::float)",
    [product.id, product.decathlon_id, product.title, product.description, product.brand_id, product.min_price, product.max_price, product.crossed_price, product.percent_reduction, product.image_path, product.rating],
    function(error, result) {

      if (error) {
        console.warn(error);
      } else {
        console.log(`Insertion avec succés de : ${product.id} - ${product.decathlon_id} - ${product.title} - ${product.description} - ${product.brand_id} - ${product.min_price} - ${product.max_price} - ${product.crossed_price} - ${product.percent_reduction} - ${product.image_path} - ${product.rating}`);
      }

    }
  );

}

readProducts();


module.exports = readProducts;
