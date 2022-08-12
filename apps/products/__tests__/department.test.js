const request = require('supertest');

const app = require('../index');
const normalProduct = require('./mockProduct.json');

const mockDepartmentId = normalProduct.category;

const onSaleProduct = JSON.parse(JSON.stringify(normalProduct));
onSaleProduct.sale_price = 18.00;

const uploadProduct = (product = normalProduct) => new Promise((resolve) => (
  request(app)
    .post('/product/upload')
    .send(product)
    .then((res) => resolve(res.body.productId))
));

describe('/department endpoint', () => {
  describe('Department Products', () => {
    test('should respond with list of products on sale', (done) => {
      uploadProduct()
        .then(() => uploadProduct())
        .then(() => (
          request(app)
            .get(`/department/${mockDepartmentId}`)
            .expect(200)
            .then((response) => {
              expect(response.body).toHaveProperty('products');
              expect(response.body.products).toHaveLength(2);
              resolve();
            })
        ))
        .then(() => done())
        .catch((err) => done(err));
    });
  });

  describe('Department Sale Products', () => {
    test('should respond with list of products on sale', (done) => {
      uploadProduct(normalProduct)
        .then(() => uploadProduct(onSaleProduct))
        .then((saleProductId) => (
          request(app)
            .get(`/department/sale/${mockDepartmentId}`)
            .expect(200)
            .then((response) => {
              expect(response.body).toHaveProperty('products');
              expect(response.body.products).toHaveLength(1);
              const searchedProduct = response.body.products[0];
              expect(searchedProduct.id).toBe(saleProductId);
              resolve();
            })
        ))
        .then(() => done())
        .catch((err) => done(err));
    });
  });
});
