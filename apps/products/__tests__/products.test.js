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

  const uploadProduct = () => new Promise((resolve) => (
    request(app)
      .post('/product/upload')
      .send(mockProduct)
      .then((res) => resolve(res.body.productId))
  ));

  describe('Reading Products', () => {
    test('should fetch valid product record', (done) => {
      uploadProduct()
        .then((mockProductId) => (
          request(app)
            .get(`/product/${mockProductId}`)
            .expect(200)
            .then((response) => {
              expect(response.body).toHaveProperty('title');
              expect(response.body).toHaveProperty('description');
              expect(response.body).toHaveProperty('price');
              done();
            })
        ))
        .then(() => done())
        .catch((err) => done(err));
    });

    test('should reject fake product record', (done) => {
      request(app)
        .get('/product/pqoeiup123u40')
        .expect(500)
        .then(() => {
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
        .then((mockProductId) => request(app)
          .put(`/product/${mockProductId}/update`)
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
        .then((mockProductId) => request(app)
          .delete(`/product/${mockProductId}/delete`)
          .expect(201)
          .then((response) => {
            expect(response.body).toBeDefined();
            done();
          }))
        .catch((err) => done(err));
    });
  });

  describe('Related Products', () => {
    test('should fetch related products from productId', (done) => {
      uploadProduct()
        .then(uploadProduct)
        .then(uploadProduct)
        .then(uploadProduct)
        .then(uploadProduct)
        .then((mockProductId) => (
          request(app)
            .get(`/product/related/${mockProductId}`)
            .expect(200)
            .then((response) => {
              expect(response.body).toHaveProperty('products');
              const { products } = response.body;
              // ALL products are related EXCEPT the given one
              expect(products.length).toBeGreaterThan(3);
              // DON'T include the given id
              products.forEach((productData) => {
                expect(productData.id).not.toBe(mockProductId);
              });
              done();
            })
        ))
        .then(() => done())
        .catch((err) => done(err));
    });

    test('should reject fake product record', (done) => {
      request(app)
        .get('/product/pqoeiup123u40')
        .expect(500)
        .then(() => {
          done();
        })
        .catch((err) => done(err));
    });
  });
});
