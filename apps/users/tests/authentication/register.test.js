const request = require('supertest');
const app = require('../../index');

describe('/register endpoint', () => {
  test('should respond', (done) => {
    request(app)
      .post('/register')
      .send({ email: 'testUser', password: 'yeet' })
      .expect(201)
      .then(() => done());
  });

  test('should revoke invalid data', (done) => {
    request(app)
      .post('/register')
      .send({ email: 'testUser', password: '' })
      .expect(401)
      .then(() => done());
  });
});
