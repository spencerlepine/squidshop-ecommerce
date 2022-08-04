const products = require('./squidshop.json');
const axios = require('axios')

const postProduct = (product) => {
  var data = JSON.stringify(product);

  const config = {
    method: 'post',
    url: 'http://localhost:8002/product/upload',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  // axios(config)
  //   .then((response) => {
  //     cnsole.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     cnsole.log(error.response.data);
  //   });
}

postProduct(products[0])