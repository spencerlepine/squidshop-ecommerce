const request = require('supertest');
const generateMockUser = require('generateMockUser');
const app = require('../../index');
const { registerUser, loginUser } = require('./authHelpers');

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

  test('should log out signed in user', (done) => {
    const mockUser = generateMockUser();

    registerUser(mockUser)
      .then(() => loginUser(mockUser))
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
