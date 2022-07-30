const request = require('supertest');
const app = require('../index');

const mockUser = {
  firstName: 'John',
  lastName: 'Cena',
  email: 'cantseeme@gmail.com',
  Address: 'UrMom Avenue, New York City, NY 10001',
};

describe('/profile endpoint', () => {
  describe('Creating Profiles', () => {
    test('should create valid profiles', (done) => {
      request(app)
        .post('/profile/create')
        .send(mockUser)
        .expect(201)
        .then((response) => {
          const data = response.body;
          expect(data.message).toBe('Successfully added user');
          expect(typeof data.userId).toBe('string');
          done();
        })
        .catch((err) => done(err));
    });

    test('should reject duplicate profiles', (done) => {
      request(app)
        .post('/profile/create')
        .send(mockUser)
        .then(() => (
          request(app)
            .post('/profile/create')
            .send(mockUser)
            .expect(409)
            .then((response) => {
              const data = response.body;
              expect(data.message).toBe('Email address already in use');
              done();
            })
        ))
        .catch((err) => done(err));
    });
  });
});
