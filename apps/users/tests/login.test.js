const request = require('supertest');
const app = require('../index');

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

describe('/login endpoint', () => {
  test('should respond', (done) => {
    request(app)
      .post('/login')
      .send({ email: 'testUser' })
      .expect(201)
      .then((response) => {
        expect(response.header['set-cookie'].length).toBeTruthy();
        expect(response.body).toBeTruthy();
        const { body } = response;
        expect(body).toHaveProperty('accessToken');
        const { accessToken } = body;
        expect(accessToken).toBeTruthy();
        expect(typeof accessToken).toBe('string');
        expect(accessToken.split('.').length).toBe(3);
        expect(body).toHaveProperty('refreshToken');
        const { refreshToken } = body;
        expect(refreshToken).toBeTruthy();
        expect(typeof refreshToken).toBe('string');
        expect(refreshToken.split('.').length).toBe(3);
        done();
      })
      .catch((err) => done(err));
  });

  test('should create JWT', (done) => {
    const mockUser = {
      email: 'testUser',
      password: 'tE$tP@$$Word',
    };

    request(app)
      .post('/login')
      .send(mockUser)
      .expect(201)
      .then((response) => {
        const parsedToken = parseJwt(response.body.accessToken);
        expect(parsedToken.name).toBe(mockUser.email);
        done();
      })
      .catch((err) => done(err));
  });
});
