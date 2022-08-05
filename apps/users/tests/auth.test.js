const request = require('supertest');
const app = require('../index');

jest.setTimeout(10000);

describe('JWT Token Authentication', () => {
  test('should handle entire authentication process', (done) => {
    const mockUser = {
      email: 'someemail@gmail.com',
      password: '$uper$SecretL0L',
    };

    const registerTest = () => new Promise((resolve) => (
      request(app)
        .post('/register')
        .send(mockUser)
        .expect(302)
        .then(() => resolve())
    ));

    const loginTest = () => new Promise((resolve) => (
      request(app)
        .post('/login')
        .send(mockUser)
        .expect(201)
        .then((response) => {
          const cookieRe = new RegExp(/=.+; Path=\/; HttpOnly$/);
          const cookie = response.header['set-cookie'][0].match(cookieRe)[0];
          const ACCESS_TOKEN = cookie.substring(1, cookie.length - 18);
          expect(ACCESS_TOKEN).toBeTruthy();
          resolve(ACCESS_TOKEN);
        })
    ));

    const logoutTest = (accessToken) => new Promise((resolve) => (
      request(app)
        .delete('/logout')
        .set({ Authorization: `Bearer ${accessToken}` })
        .expect(204)
        .then(() => resolve())
    ));

    const badLoginTest = () => new Promise((resolve) => (
      request(app)
        .post('/login')
        .send({})
        .expect(401)
        .then(() => resolve())
    ));

    registerTest()
      .then(loginTest)
      .then(logoutTest)
      .then(badLoginTest)
      .then(loginTest)
      .then(() => done())
      .catch((err) => done(err));
  });
});
