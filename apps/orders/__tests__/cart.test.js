const request = require('supertest');

const app = require('../index');
const mockProduct = require('./mockProduct.json');

describe('/carts endpoint operations', () => {
  const addProductToCart = (product, userId) => new Promise((resolve) => (
    request(app)
      .post(`/add/${userId}`)
      .send(product)
      .expect(201)
      .then((result) => resolve(result.body.cart))
  ));

  describe('Adding to cart', () => {
    test('should add item to and return entire cart', (done) => {
      request(app)
        .post(`/add/${'mockUserId987'}`)
        .send(mockProduct)
        .expect(201)
        .then((response) => {
          expect(response.body).toHaveProperty('cart');
          expect(response.body.cart).toHaveLength(1);
          const cartItem = response.body.cart[0];
          expect(cartItem).toHaveProperty('cartItemId');
          expect(cartItem).toHaveProperty('productId');
          expect(cartItem).toHaveProperty('title');
          expect(cartItem).toHaveProperty('description');
          expect(cartItem).toHaveProperty('image');
          expect(cartItem).toHaveProperty('category');
          expect(cartItem).toHaveProperty('price');
          expect(cartItem).toHaveProperty('rating_count');
          expect(cartItem).toHaveProperty('rating_rate');
          done();
        })
        .catch((err) => done(err));
    });

    test('should add multiple items to user cart', (done) => {
      const mockAddingUserId = 'mockUserId1010';
      addProductToCart(mockProduct, mockAddingUserId)
        .then(() => addProductToCart(mockProduct, mockAddingUserId))
        .then(() => addProductToCart(mockProduct, mockAddingUserId))
        .then((cart) => {
          expect(cart).toHaveLength(3);
          done();
        })
        .catch((err) => done(err));
    });

    test('should remove item and return updated cart', (done) => {
      const mockRemoveUserId = 'mockUserId9999';
      addProductToCart(mockProduct, mockRemoveUserId)
        .then(() => addProductToCart(mockProduct, mockRemoveUserId))
        .then(() => addProductToCart(mockProduct, mockRemoveUserId))
        .then((cart) => {
          const cartItemIdOne = cart[0].cartItemId;
          expect(cartItemIdOne).toBeTruthy();

          return request(app)
            .delete(`/remove/${mockRemoveUserId}/${cartItemIdOne}`)
            .expect(201)
            .then((result) => {
              expect(result.body).toHaveProperty('cart');
              expect(result.body.cart).toHaveLength(1 + 1 + 1 - 1);
              done();
            });
        })
        .catch((err) => done(err));
    });
  });

  describe('Fetch the user cart', () => {
    test('should return entire user cart', (done) => {
      const mockGetUserId = 'mockUserId7779';
      addProductToCart(mockProduct, mockGetUserId)
        .then(() => addProductToCart(mockProduct, mockGetUserId))
        .then(() => addProductToCart(mockProduct, mockGetUserId))
        .then(() => request(app)
          .get(`/${mockGetUserId}`)
          .expect(200)
          .then((result) => {
            expect(result.body).toHaveProperty('cart');
            expect(result.body.cart).toHaveLength(3);
            done();
          }))
        .catch((err) => done(err));
    });
  });

  const getUserCart = (userId) => new Promise((resolve) => (
    request(app)
      .get(`/${userId}`)
      .expect(200)
      .then((result) => resolve(result.body.cart))
  ));

  describe('Cart Checkout', () => {
    test('should delete user cart and create order', (done) => {
      const mockCheckoutUserId = 'mockUserId9999';
      addProductToCart(mockProduct, mockCheckoutUserId)
        .then(() => request(app)
          .post(`/checkout/${mockCheckoutUserId}`)
          .expect(201)
          .then((result) => {
            expect(result.body.cart).toHaveLength(0);
          }))
        .then(() => getUserCart(mockCheckoutUserId))
        .then((cart) => {
          expect(cart).toHaveLength(0);
          done();
        })
        .catch((err) => done(err));
    });

    const getUserOrders = (userId) => new Promise((resolve) => (
      request(app)
        .get(`/orders/${userId}`)
        .expect(200)
        .then((result) => resolve(result.body.orders))
    ));

    test('should create user order', (done) => {
      const mockCheckoutUserId = 'mockUserId5497';

      const mockCheckoutCart = (userId) => new Promise((resolve) => (
        addProductToCart(mockProduct, userId)
          .then(() => (
            request(app)
              .post(`/checkout/${userId}`)
              .expect(201)
              .then(() => resolve())
          ))
      ));

      mockCheckoutCart(mockCheckoutUserId)
        .then(() => getUserOrders(mockCheckoutUserId))
        .then((orders) => {
          expect(orders).toHaveLength(1);
          done();
        })
        .catch((err) => done(err));
    });
  });
});
