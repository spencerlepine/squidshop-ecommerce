const request = require('supertest');

const app = require('../index');
const mockOrder = require('./mockOrder.json');
/*
  # Find all orders for a user
  - get: '/orders/:userId/all'
  # Find single order for a user
  - get: '/orders/:userId/:orderId'
  # Update user order
  - put: '/orders/:userId/:orderId/update'
  # Delete user order
  - delete: '/orders/:userId/:orderId/delete'

  */

const mockUserId = 12;
const UPLOAD_ENDPOINT = `/orders/${mockUserId}/create`;

describe('/orders endpoint CRUD operations', () => {
  describe('Creating Orders', () => {
    test('should create valid order', (done) => {
      request(app)
        .post(UPLOAD_ENDPOINT)
        .send(mockOrder)
        .expect(201)
        .then((response) => {
          const data = response.body;
          expect(data).toBeDefined();
          expect(data.message).toBe('Successfully created order');
          expect(data).toHaveProperty('order');
          const { order } = data;
          expect(typeof data.order.id).toBe('number');
          expect(order).toHaveProperty('purchaseDate');
          expect(order).toHaveProperty('shipAddress');
          expect(order).toHaveProperty('productName');
          done();
        })
        .catch((err) => done(err));
    });
  });

  /*
  describe('Reading Orders', () => {
    test('should fetch valid order record', (done) => {
      request(app)
        .post(UPLOAD_ENDPOINT)
        .send(mockOrder)
        .then((res) => (res.body.orderId))
        .then((mockOrderId) => request(app)
          .get(`/orders/${mockUserId}/${mockOrderId}`)
          .expect(200)
          .then((response) => {
            const { data } = response;
            expect(data).toHaveProperty('purchaseDate');
            expect(data).toHaveProperty('shipAddress');
            expect(data).toHaveProperty('productName');
            done();
          }))
        .catch((err) => done(err));
    });

    test('should reject fake order record', (done) => {
      request(app)
        .get(`/orders/${mockUserId}/asdflkjsadfasdfasfd`)
        .expect(500)
        .then((response) => {
          const data = response.body;
          expect(data).toHaveProperty('message', 'Unable to find order record');
          done();
        })
        .catch((err) => done(err));
    });

    test('should fetch all valid order record', (done) => {
      request(app)
        .post(UPLOAD_ENDPOINT)
        .send(mockOrder)
        .then((res) => (res.body.orderId))
        .then((mockOrderId) => request(app)
          .get(`/orders/${mockUserId}/${mockOrderId}`)
          .expect(200)
          .then((response) => {
            const { data } = response;
            expect(data.orders).toBeDefined();
            const { orders } = data;
            expect(Array.isArray(orders)).toBeTruthy();
            orders.forEach((orderData) => {
              expect(orderData).toHaveProperty('purchaseDate');
              expect(orderData).toHaveProperty('shipAddress');
              expect(orderData).toHaveProperty('productName');
            });
            done();
          }))
        .catch((err) => done(err));
    });
  });

  describe('Updating Orders', () => {
    const freshRecord = JSON.parse(JSON.stringify(mockOrder));
    const updatedOrder = {
      ...freshRecord,
      status: 'cancelled',
    };

    test('should update order record', (done) => {
      request(app)
        .post(UPLOAD_ENDPOINT)
        .send(freshRecord)
        .then((res) => (res.body.orderId))
        .then((mockOrderId) => request(app)
          .put(`/orders/${mockUserId}/${mockOrderId}/update`)
          .send(updatedOrder)
          .expect(201)
          .then((response) => {
            expect(response.body).toHaveProperty('status', updatedOrder.status);
            expect(response.body).toHaveProperty('description');
            expect(response.body).toHaveProperty('price');
            done();
          }))
        .catch((err) => done(err));
    });
  });

  describe('Deleting Orders', () => {
    test('should delete order record', (done) => {
      request(app)
        .post('/orders/upload')
        .send(mockOrder)
        .then((res) => (res.body.orderId))
        .then((mockOrderId) => request(app)
          .delete(`/orders//${mockUserId}/${mockOrderId}/delete`)
          .expect(201)
          .then((response) => {
            expect(response.body).toBeDefined();
            done();
          }))
        .catch((err) => done(err));
    });
  });
  */
});
