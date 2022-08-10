const request = require('supertest');
const generateMockUser = require('generateMockUser');
const app = require('../../index');

describe('/register endpoint', () => {
  test('should respond', (done) => {
    request(app)
      .post('/register')
      .send(generateMockUser())
      // .expect(201)
      .then((r) => {
        console.error(r.error);
        done();
      });
    // .then(() => done());
  });

  test('should revoke invalid data', (done) => {
    request(app)
      .post('/register')
      .send({ email: 'testemail@gmail.com', password: '' })
      .expect(401)
      .then(() => done());
  });

  test('should not sign up duplicate email', (done) => {
    const duplicateUser = generateMockUser();

    request(app)
      .post('/register')
      .send(duplicateUser)
      .expect(201)
      .then(() => (
        request(app)
          .post('/register')
          .send(duplicateUser)
          .expect(401)
      ))
      .then(() => done());
  });
});
