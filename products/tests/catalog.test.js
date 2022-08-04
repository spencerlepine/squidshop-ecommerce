const request = require('supertest');

const app = require('../index');
const mockProduct = require('./mockProduct.json');

describe('/catalog endpoint', () => {
  test('should respond with list of products', (done) => {
    const uploadProduct = () => new Promise((resolve) => (
      request(app)
        .post('/product/upload')
        .send(mockProduct)
        .then((res) => resolve(res.body.productId))
    ));

    const fetchCatalog = () => new Promise((resolve) => (
      request(app)
        .get('/catalog')
        .expect(200)
        .then((response) => {
          expect(typeof response.body).toBe('object');
          resolve();
        })
    ));

    uploadProduct()
      .then(uploadProduct)
      .then(uploadProduct)
      .then(uploadProduct)
      .then(fetchCatalog)
      .then(() => done())
      .catch((err) => done(err));
  });
});
