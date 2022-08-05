const { registerUser, loginUser } = require('./authHelpers');

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

describe('/login endpoint', () => {
  const mockUser = {
    email: 'testUser',
    password: 'tE$tP@$$Word',
  };

  beforeAll(() => {
    registerUser(mockUser);
  });

  test('should respond', (done) => {
    loginUser(mockUser)
      .then((response) => {
        expect(response.header['set-cookie'].length).toBe(2);
        done();
      })
      .catch((err) => done(err));
  });

  test('should create JWT with user email and ID', (done) => {
    loginUser(mockUser)
      .then((response) => {
        const parsedToken = parseJwt(response.header['set-cookie'][0]);
        expect(parsedToken.email).toBe(mockUser.email);
        expect(parsedToken.id).toBeDefined();
        done();
      })
      .catch((err) => done(err));
  });
});
