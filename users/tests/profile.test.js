const request = require('supertest');
const app = require('../index');

describe('/profile endpoint', () => {
  describe('Creating Profiles', () => {
    test('should create valid profiles', (done) => {
      const mockUser = {
        firstName: 'John',
        lastName: 'Cena',
        email: 'cantseeme@gmail.com',
        address: 'UrMom Avenue, New York City, NY 10001',
      };

      request(app)
        .post('/profile/create')
        .send(mockUser)
        .expect(201)
        .then((response) => {
          const data = response.body;
          expect(data.message).toBe('Successfully added user');
          expect(typeof data.userId).toBe('string');
          expect(typeof data.userId).not.toBe('');
          done();
        })
        .catch((err) => done(err));
    });

    test('should reject duplicate profiles', (done) => {
      const mockUser = {
        firstName: 'YG',
        lastName: 'Brazy',
        email: 'suuwhoop@gmail.com',
        address: 'Bompton',
      };

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

  describe('Fetching Profiles', () => {
    const mockerUserId = 1;

    test('should fetch valid user profile', (done) => {
      request(app)
        .get(`/profile/${mockerUserId}`)
        .expect(200)
        .then((response) => {
          const data = response.body;
          expect(data).toHaveProperty('email');
          done();
        })
        .catch((err) => done(err));
    });

    test('should reject fake user profile', (done) => {
      request(app)
        .get(`/profile/${'pqoeiup123u40'}`)
        .expect(400)
        .then((response) => {
          const data = response.body;
          expect(data).toHaveProperty('message', 'Unable to find user profile');
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('Updating Profiles', () => {
    // Already signed up in previous test
    const mockUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Cena',
      email: 'cantseeme@gmail.com',
      address: 'UrMom Avenue, New York City, NY 10001',
    };

    test('should update valid user profile', (done) => {
      const newAddress = 'UrDad Avenue, New York City, NY 10001';
      const updatedProfile = {
        ...mockUser,
        address: newAddress,
      };

      request(app)
        .put(`/profile/${mockUser.id}/update`)
        .send(updatedProfile)
        // .expect(201)
        .then((response) => {
          const data = response.body;
          expect(data).toHaveProperty('address', newAddress);
          done();
        });
    });

    test('should not update fake user profile', (done) => {
      const fakeUser = {
        id: 9999999999,
        firstName: 'Not',
        lastName: 'Real',
        email: 'totallylegit@gmail.com',
        address: 'Space',
      };

      request(app)
        .put(`/profile/${fakeUser.id}/update`)
        .send(fakeUser)
        .expect(409)
        .then((response) => {
          const data = response.body;
          expect(data).toHaveProperty('message', 'Unable to update user profile');
          done();
        })
        .catch((err) => done(err));
    });
  });
});
