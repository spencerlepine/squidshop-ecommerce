const request = require('supertest');

const app = require('../index');
const mockProduct = require('./mockProduct.json');

describe('/product endpoint CRUD operations', () => {
  describe('Creating Products', () => {
    test('should create valid product', (done) => {
      request(app)
        .post('/product/upload')
        .send(mockProduct)
        .expect(201)
        .then((response) => {
          const data = response.body;
          expect(data).toBeDefined();
          expect(data.message).toBe('Successfully added product');
          expect(typeof data.productId).toBe('string');
          expect(data.productId).not.toBe('');
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('Reading Products', () => {
    test('should fetch valid product record', (done) => {
      request(app)
        .post('/product/upload')
        .send(mockProduct)
        .then((res) => (res.body.productId))
        .then((mockerProductId) => request(app)
          .get(`/product/${mockerProductId}`)
          .expect(200)
          .then((response) => {
            expect(response.body).toHaveProperty('title');
            expect(response.body).toHaveProperty('description');
            expect(response.body).toHaveProperty('price');
            done();
          }))
        .catch((err) => done(err));
    });

    test('should reject fake product record', (done) => {
      request(app)
        .get('/product/pqoeiup123u40')
        .expect(500)
        .then((response) => {
          const data = response.body;
          expect(data).toHaveProperty('message', 'Unable to find product record');
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('Updating Products', () => {
    const freshProduct = {
      title: 'A bad title',
      price: 420.69,
      description: 'My mango is to blow up',
      category: 'Dill',
      image: 'http://dummyimage.com/248x100.png/ff4444/ffffff',
      rating_rate: 5.0,
      rating_count: 999,
    };
    const updatedProduct = {
      ...freshProduct,
      title: 'A better title!',
    };

    test('should update product record', (done) => {
      request(app)
        .post('/product/upload')
        .send(freshProduct)
        .then((res) => (res.body.productId))
        .then((mockerProductId) => request(app)
          .put(`/product/${mockerProductId}/update`)
          .send(updatedProduct)
          .expect(201)
          .then((response) => {
            expect(response.body).toHaveProperty('title', updatedProduct.title);
            expect(response.body).toHaveProperty('description');
            expect(response.body).toHaveProperty('price');
            done();
          }))
        .catch((err) => done(err));
    });
  });

  describe('Deleting Products', () => {
    test('should delete product record', (done) => {
      request(app)
        .post('/product/upload')
        .send(mockProduct)
        .then((res) => (res.body.productId))
        .then((mockerProductId) => request(app)
          .delete(`/product/${mockerProductId}/delete`)
          .expect(201)
          .then((response) => {
            expect(response.body).toBeDefined();
            done();
          }))
        .catch((err) => done(err));
    });
  });
});
