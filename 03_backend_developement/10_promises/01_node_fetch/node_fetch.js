const fetch = require("node-fetch");
function getBrandTitle() {
  return fetch(`https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      return result.brand_id;
    })
    .then((brandId) => {
      return fetch(`https://decath-product-api.herokuapp.com/brands/${brandId}`
      )
        .then((response) => response.json())
        .then ((result) => result.title);
    }
    )
    .catch((error) => {
      console.warn(error);
    })
  ;
}

getBrandTitle().then((result) => console.log (result));
