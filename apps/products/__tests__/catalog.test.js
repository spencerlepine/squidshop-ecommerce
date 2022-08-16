const request = require('supertest');

const app = require('../index');
const mockProduct = require('./mockProduct.json');

const uploadProduct = (product = mockProduct) => new Promise((resolve) => (
  request(app)
    .post('/product/upload')
    .send(product)
    .then((res) => resolve(res.body.productId))
));

describe('/catalog endpoint', () => {
  describe('Catalog Products', () => {
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
              expect(response.body.products.length > 1).toBeTruthy();
              done();
            })
        ))
        .then(() => done())
        .catch((err) => done(err));
    });
  });

  describe('Catalog Search', () => {
    test('should respond with list of products based on query', (done) => {
      const renamedProduct = JSON.parse(JSON.stringify(mockProduct));
      renamedProduct.title = 'My Specific Title';
      const testQuery = 'my specific title';

      uploadProduct(renamedProduct)
        .then(uploadProduct)
        .then(uploadProduct)
        .then(uploadProduct)
        .then(() => (
          request(app)
            .get(`/catalog?query=${testQuery}`)
            .expect(200)
            .then((response) => {
              expect(response.body).toHaveProperty('products');
              expect(response.body.products.length > 1).toBeTruthy();
              const containsSearched = response.body.products.some((p) => (
                p.title === renamedProduct.title
              ));
              expect(containsSearched).toBeTruthy();
              done();
            })
        ))
        .then(() => done())
        .catch((err) => done(err));
    });
  });
});
