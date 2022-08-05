const request = require('supertest');
const app = require('../../index');
const { registerUser, loginUser } = require('./authHelpers');

const mockUser = {
  email: 'testUser9999',
  password: 'tE$tP@$$Word098098',
};

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
        // const authHeader = req.headers.authorization;
        // const token = authHeader && authHeader.split(' ')[1];
        // if (token == null) {
        //   return res.status(401).json({
        //     message: 'Please provide valid token',
        //   });
        // }

        // jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, user) => {
        //   if (err) {
        //     return res.status(403).json({
        //       message: 'Token no longer valid',
        //     });
        //   }
        //   req.user = user;
        //   next();
        // });
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

  // test('should log out signed in user', (done) => {
  //   const mockUser = {
  //     email: 'testUser200',
  //     password: 'tE$tP@$$Word',
  //   };

  //   registerUser(mockUser)
  //     .then(() => loginUser(mockUser))
  //     .then((response) => (
  //       request(app)
  //         .delete('/logout')
  //         .set({ Authorization: `Bearer ${response.body.accessToken}` })
  //         .expect(204)
  //         .then(() => {
  //           done();
  //         })
  //     ))
  //     .catch((err) => done(err));
  // });
});
