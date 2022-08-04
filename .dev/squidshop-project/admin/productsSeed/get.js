const products = require('./squidshop.json');
const axios = require('axios')

const postProduct = (product) => {
  var data = JSON.stringify(product);

  const config = {
    method: 'get',
    url: 'http://localhost:8002/product/d997d490-ce7c-4588-8bd9-4d7061468cdd',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // axios(config)
  //   .then((response) => {
  //     onsole.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     onsole.log(error.response.data);
  //   });
}

postProduct(products[0])