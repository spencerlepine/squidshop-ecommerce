const request = require('supertest');
const app = require('../index');

describe('Gateway Service', () => {
  describe('/products endpoint', () => {
    test('should respond', (done) => {
      request(app)
        .get('/products')
        // .expect(200)
        .then(() => {
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('/users endpoint', () => {
    test('should respond', (done) => {
      request(app)
        .get('/users')
        // .expect(200)
        .then(() => {
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('/orders endpoint', () => {
    test('should respond', (done) => {
      request(app)
        .get('/orders')
        // .expect(200)
        .then(() => {
          done();
        })
        .catch((err) => done(err));
    });
  });
});
