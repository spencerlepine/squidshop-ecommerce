const request = require('supertest');
const generateMockUser = require('generateMockUser');
const app = require('../../index');

jest.setTimeout(10000);

const parseResponseCookie = (cookieStr) => {
  const cookieRe = new RegExp(/=.+; Path=\/; HttpOnly$/);

  const cookie = cookieStr.match(cookieRe)[0];
  return cookie.substring(1, cookie.length - 18);
};

describe('JWT Token Authentication', () => {
  test('should handle entire authentication process', (done) => {
    const mockUser = generateMockUser();
    const registerTest = () => new Promise((resolve) => (
      request(app)
        .post('/register')
        .send(mockUser)
        .expect(201)
        .then(() => resolve())
    ));

    const loginTest = () => new Promise((resolve) => (
      request(app)
        .post('/login')
        .send(mockUser)
        .expect(201)
        .then((response) => {
          const ACCESS_TOKEN = parseResponseCookie(response.header['set-cookie'][0]);
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
