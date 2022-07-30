/* eslint-disable no-param-reassign */
const request = require('supertest');

jest.mock('../src/models', () => {
  function ProductFunc(obj) {
    obj.storage = {};

    obj.findOne = (query) => {
      const { id } = query;

      return new Promise((resolve) => {
        resolve(obj.storage[id]);
      });
    };

    obj.update = (query, updatedRecord) => {
      const { id } = query;
      obj.storage[id] = updatedRecord;

      return new Promise((resolve) => {
        resolve(updatedRecord);
      });
    };

    obj.delete = (query) => {
      const { id } = query;
      delete obj.storage[id];

      return new Promise((resolve) => {
        resolve({});
      });
    };

    obj.saveAsync = (id) => new Promise((resolve) => resolve({
      message: 'Successfully added product',
      productId: id,
    }));

    return obj;
  }

  const output = ProductFunc;

  return ({
    instance: {
      Product: output,
    },
  });
});

const app = require('../index');

const mockProduct = {
  title: 'A Cool T-Shirt',
  price: 407.68,
  description: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
  category: 'Baby',
  image: 'http://dummyimage.com/248x100.png/ff4444/ffffff',
  rating_rate: 3.1,
  rating_count: 0,
};

describe('/product endpoint', () => {
  describe('Creating Products', () => {
    test('should create valid product', (done) => {
      request(app)
        .post('/product/upload')
        .send(mockProduct)
        .expect(201)
        .then((response) => {
          console.log(response.body);
          const data = response.body;
          expect(data).toBeDefined();
          expect(data.message).toBe('Successfully added product');
          expect(typeof data.productId).toBe('string');
          expect(data.productId).not.toBe('');
          done();
        })
        .catch((err) => done(err));
    });
  });

  // describe('Fetching Products', () => {
  //   test('should fetch valid product record', (done) => {
  //     request(app)
  //       .post('/product/upload')
  //       .send(mockProduct)
  //       .then((res) => (res.body.productId))
  //       .then((mockerProductId) => {
  //         console.log(mockerProductId, 'ID');

  //         return request(app)
  //           .get(`/product/${mockerProductId}`)
  //           // .expect(200)
  //           .then((response) => {
  //             console.error(response.error);
  //             const { data } = response;
  //             expect(data).toHaveProperty('email');
  //             expect(data).toHaveProperty('description');
  //             expect(data).toHaveProperty('price');
  //             done();
  //           });
  //       })
  //       .catch((err) => done(err));
  //   });

  //   test('should reject fake user profile', (done) => {
  //     request(app)
  //       .get('/product/pqoeiup123u40')
  //       .expect(500)
  //       .then((response) => {
  //         const data = response.body;
  //         expect(data).toHaveProperty('message', 'Unable to find product record');
  //         done();
  //       })
  //       .catch((err) => done(err));
  //   });
  // });

  // describe('Updating Profiles', () => {
  //   // Already signed up in previous test
  //   const mockUser = {
  //     id: 1,
  //     firstName: 'John',
  //     lastName: 'Cena',
  //     email: 'cantseeme@gmail.com',
  //     address: 'UrMom Avenue, New York City, NY 10001',
  //   };

  //   test('should update valid user profile', (done) => {
  //     const newAddress = 'UrDad Avenue, New York City, NY 10001';
  //     const updatedProfile = {
  //       ...mockUser,
  //       address: newAddress,
  //     };

  //     request(app)
  //       .put(`/profile/${mockUser.id}/update`)
  //       .send(updatedProfile)
  //       // .expect(201)
  //       .then((response) => {
  //         const data = response.body;
  //         expect(data).toHaveProperty('address', newAddress);
  //         done();
  //       });
  //   });

  //   test('should not update fake user profile', (done) => {
  //     const fakeUser = {
  //       id: 9999999999,
  //       firstName: 'Not',
  //       lastName: 'Real',
  //       email: 'totallylegit@gmail.com',
  //       address: 'Space',
  //     };

  //     request(app)
  //       .put(`/profile/${fakeUser.id}/update`)
  //       .send(fakeUser)
  //       .expect(409)
  //       .then((response) => {
  //         const data = response.body;
  //         expect(data).toHaveProperty('message', 'Unable to update user profile');
  //         done();
  //       })
  //       .catch((err) => done(err));
  //   });
  // });
});
