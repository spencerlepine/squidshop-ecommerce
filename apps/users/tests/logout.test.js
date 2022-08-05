const request = require('supertest');
const app = require('../index');

describe('/logout endpoint', () => {
  test('should respond', (done) => {
    request(app)
      .delete('/logout')
      .set({ Authorization: 'Bearer 2034985093845709238457' })
      .expect(204)
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });

  test('should revoke signed in user', (done) => {
    const mockUser = {
      email: 'testUser',
      password: 'tE$tP@$$Word',
    };

    request(app)
      .post('/login')
      .send(mockUser)
      .expect(201)
      .then((response) => (
        request(app)
          .delete('/logout')
          .set({ Authorization: `Bearer ${response.body.accessToken}` })
          .expect(204)
          .then(() => {
            done();
          })
      ))
      .catch((err) => done(err));
  });
});
