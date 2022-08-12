const request = require('supertest');

const app = require('../index');
const mockProduct = require('./mockProduct.json');

const uploadProduct = () => new Promise((resolve) => (
  request(app)
    .post('/product/upload')
    .send(mockProduct)
    .then((res) => resolve(res.body.productId))
));

describe('/catalog endpoint', () => {
  test('should respond with list of products', (done) => {
    uploadProduct()
      .then(uploadProduct)
      .then(uploadProduct)
      .then(uploadProduct)
      .then(() => (
        request(app)
          .get('/catalog')
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object');
            expect(response.body).toHaveProperty('products');
            expect(response.body.length > 1).toBeTruthy();
            resolve();
          })
      ))
      .then(() => done())
      .catch((err) => done(err));
  });
});
