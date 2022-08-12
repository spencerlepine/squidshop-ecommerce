const request = require('supertest');
const generateMockUser = require('generateMockUser');
const app = require('../../index');
const { registerUser, loginUser } = require('./authHelpers');

const mockUser = generateMockUser();

const parseResponseCookie = (cookieStr) => {
  const cookieRe = new RegExp(/=.+; Path=\/; HttpOnly$/);

  const cookie = cookieStr.match(cookieRe)[0];
  return cookie.substring(1, cookie.length - 18);
};

describe('/token endpoint', () => {
  test('should respond', (done) => {
    registerUser(mockUser)
      .then(() => loginUser(mockUser))
      .then((response) => {
        const refreshToken = parseResponseCookie(response.header['set-cookie'][1]);

        return request(app)
          .post('/token')
          .set({ Authorization: `Bearer ${refreshToken}` })
          .expect(204)
          .then(() => {
            done();
          });
      })
      .catch((err) => done(err));
  });
});
