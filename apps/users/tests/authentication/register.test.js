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
      .send({ email: 'testemail@gmail.com', password: '' })
      .expect(401)
      .then(() => done());
  });

  test('should not sign up duplicate email', (done) => {
    const duplicateEmail = 'duplicateemail@gmail.com';

    request(app)
      .post('/register')
      .send({ email: duplicateEmail, password: 'password$948' })
      .expect(201)
      .then(() => (
        request(app)
          .post('/register')
          .send({ email: duplicateEmail, password: 'password$948' })
          .expect(401)
      ))
      .then(() => done());
  });
});
