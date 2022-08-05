const request = require('supertest');
const app = require('../index');

const mockUser = {
  email: 'testUser',
  password: 'tE$tP@$$Word',
};

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

describe('/login endpoint', () => {
  test('should respond', (done) => {
    const registerUser = () => (new Promise((resolve) => (
      request(app)
        .post('/register')
        .send(mockUser)
        .then(() => resolve())
    )));

    const loginUser = () => (new Promise((resolve) => (
      request(app)
        .post('/login')
        .send(mockUser)
        .expect(201)
        .then((response) => resolve(response))
    )));

    registerUser()
      .then(loginUser)
      .then((response) => {
        expect(response.header['set-cookie'].length).toBe(2);
        done();
      })
      .catch((err) => done(err));
  });

  test('should create JWT with user email and ID', (done) => {
    request(app)
      .post('/login')
      .send(mockUser)
      .expect(201)
      .then((response) => {
        const parsedToken = parseJwt(response.header['set-cookie'][0]);
        expect(parsedToken.email).toBe(mockUser.email);
        expect(parsedToken.id).toBeDefined();
        done();
      })
      .catch((err) => done(err));
  });
});
