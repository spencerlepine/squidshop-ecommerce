const request = require('supertest');
const app = require('../../index');

describe('/register endpoint', () => {
  test('should respond', (done) => {
    request(app)
      .post('/register')
      .send({ email: 'testUser', password: 'yeet' })
      .expect(302)
      .expect('Location', /\/login/, done);
  });

  test('should return to register endpoint with invalid data', (done) => {
    request(app)
      .post('/register')
      .send({ email: 'testUser', password: '' })
      .expect(302)
      .expect('Location', /\/register/, done);
  });
});
