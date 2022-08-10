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

describe('/authenticate endpoint', () => {
  beforeAll(async () => {
    await registerUser(mockUser);
  });

  test('should accept valid tokens', (done) => {
    loginUser(mockUser)
      .then((loginResponse) => (
        request(app)
          .get('/authenticate')
          .set('Cookie', [`accessToken=${parseResponseCookie(loginResponse.header['set-cookie'][0])}`])
          .expect(201)
          .then(() => done())
          .catch((err) => done(err))
      ));
  });

  test('should reject missing or invalid tokens', (done) => {
    request(app)
      .get('/authenticate')
      .set('Cookie', ['accessToken=DEfnotaHacker'])
      .expect(403)
      .then(() => done())
      .catch((err) => done(err));
  });

  //   const logoutTest = (accessToken) => new Promise((resolve) => (

  //   ));

  //   const badLoginTest = () => new Promise((resolve) => (
  //     request(app)
  //       .post('/login')
  //       .send({})
  //       .expect(401)
  //       .then(() => resolve())
  //   ));

  //   registerTest()
  //     .then(loginTest)
  //     .then(logoutTest)
  //     .then(badLoginTest)
  //     .then(loginTest)
  //     ;
  // });
});
