const request = require('supertest');

const app = require('../index');
const mockOrder = require('./mockOrder.json');

describe('/orders endpoint CRUD operations', () => {
  describe('Creating Orders', () => {
    test('should accept and create valid order', (done) => {
      request(app)
        .post(`/orders/${'mockUserId987'}/create`)
        .send(mockOrder)
        .expect(201)
        .then(() => done())
        .catch((err) => done(err));
    });

    test('should return all current users orders', (done) => {
      request(app)
        .post(`/orders/${'mockUserId342'}/create`)
        .send(mockOrder)
        .expect(201)
        .then((result) => {
          expect(result.body).toHaveProperty('orders');
          expect(result.body.orders).toHaveLength(1);
          expect(result.body.orders.at(-1)).toHaveProperty('id');
          done();
        })
        .catch((err) => done(err));
    });
  });

  const uploadMockOrder = (options = { mockOrder, userId: 'mockUserId123' }) => new Promise((resolve) => (
    request(app)
      .post(`/orders/${options.userId}/create`)
      .send(mockOrder)
      .expect(201)
      .then((result) => resolve(result.body.orders.at(-1)))
  ));

  describe('Reading Orders', () => {
    test('should fetch a user order', (done) => {
      const readUserId = '098345709817';

      uploadMockOrder({ userId: readUserId })
        .then((thisOrderId) => (
          request(app)
            .get(`/orders/${options.userId}/${thisOrderId}`)
            .expect(201)
        ))
        .then((result) => {
          expect(result.body).toHaveProperty('orderId');
          expect(result.body).toHaveProperty('userId');
          expect(result.body).toHaveProperty('orderAddress');
          expect(result.body).toHaveProperty('orderAddress');
          expect(result.body).toHaveProperty('orderTotal');
          expect(result.body).toHaveProperty('purchaseDate');
          expect(result.body).toHaveProperty('cartItems');
          done();
        })
        .catch((err) => done(err));
    });

    test('should fetch all user orders', (done) => {
      const readUserId = '09834573425';

      uploadMockOrder({ userId: readUserId })
        .then(() => uploadMockOrder({ userId: readUserId }))
        .then(() => (
          request(app)
            .get(`/orders/${options.userId}`)
            .expect(201)
        ))
        .then((result) => {
          expect(result.body).toHaveProperty('orders');
          expect(result.body.orders).toHaveLength(2);
          const { orders } = result.body;
          orders.forEach((orderData) => {
            expect(orderData).toHaveProperty('orderId');
            expect(orderData).toHaveProperty('userId');
            expect(orderData).toHaveProperty('orderAddress');
            expect(orderData).toHaveProperty('orderAddress');
            expect(orderData).toHaveProperty('orderTotal');
            expect(orderData).toHaveProperty('purchaseDate');
            expect(orderData).toHaveProperty('cartItems');

            orderData.cartItems.forEach((cartItem) => {
              expect(cartItem).toHaveProperty('productId');
              expect(cartItem).toHaveProperty('title');
              expect(cartItem).toHaveProperty('description');
              expect(cartItem).toHaveProperty('image');
              expect(cartItem).toHaveProperty('category');
              expect(cartItem).toHaveProperty('price');
              expect(cartItem).toHaveProperty('rating_rate');
              expect(cartItem).toHaveProperty('rating_count');
            });
          });
          done();
        })
        .catch((err) => done(err));
    });
  });

  const getMockOrder = (userId, orderId) => new Promise((resolve) => (
    request(app)
      .get(`/orders/${userId}/${orderId}`)
      .expect(201)
      .then((result) => resolve(result.body))
  ));

  describe('Updating Orders', () => {
    test('should update order record', (done) => {
      const uploadUserId = '0987345987';
      const freshRecord = JSON.parse(JSON.stringify(mockOrder));
      const startingStatus = freshRecord.status;

      // Create the product
      uploadMockOrder({ userId: uploadUserId, mockOrder: freshRecord })
        .then((orderId) => getMockOrder(uploadUserId, orderId)
          .then((result) => {
            // Change the record
            expect(result.body).toHaveProperty('status', startingStatus);
            const recordToChange = JSON.parse(JSON.stringify(result.body));
            recordToChange.status = 'cancelled';

            return request(app)
              .put(`/orders/${userId}/${orderId}/update`)
              .send(recordToChange)
              .expect(201);
          }))
        .then(({ body: updatedRecord }) => {
          // Assert record changed
          expect(updatedRecord).toHaveProperty('status', 'cancelled');
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe('Deleting Orders', () => {
    test('should delete order record', (done) => {
      const deleteUserId = '092817509812735';
      uploadMockOrder({ userId: deleteUserId, mockOrder: freshRecord })
        .then((orderId) => getMockOrder(deleteUserId, orderId)
          .then(() => request(app)
            .delete(`/orders/${mockUserId}/${orderId}/delete`)
            .expect(201)
            .then((response) => {
              expect(response.body).toBeDefined();
              done();
            })))
        .catch((err) => done(err));
    });
  });
});
