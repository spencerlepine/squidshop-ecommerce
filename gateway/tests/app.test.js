const request = require('supertest');
const app = require('../index');

describe('Gateway Service', () => {
  describe('/products endpoint', () => {
    test('should respond', (done) => {
      request(app)
        .get('/products')
        // .expect(200)
        .then((response) => {
          console.log(response.error);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('/customers endpoint', () => {
    test('should respond', (done) => {
      request(app)
        .get('/customers')
        // .expect(200)
        .then((response) => {
          console.log(response.error);
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('/shopping endpoint', () => {
    test('should respond', (done) => {
      request(app)
        .get('/shopping')
        // .expect(200)
        .then((response) => {
          console.log(response.error);
          done();
        })
        .catch((err) => done(err));
    });
  });
});
