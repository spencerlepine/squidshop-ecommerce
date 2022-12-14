const express = require('express');
const db = require('../../database/connection');

const { CartItems, Orders, OrderItems } = db;

const router = express.Router();

const fetchEntireUserCart = (userId) => (
  new Promise((resolve, reject) => CartItems.findAll({ where: { userId } })
    .then((data) => data.map((l) => ({
      ...l.dataValues,
      cartItemId: l.dataValues.id,
    })))
    .then((userCart) => resolve(userCart))
    .catch(reject))
);

// Add item to cart
router.post('/add/:userId', (req, res, next) => {
  const { userId } = req.params;
  const data = { ...req.body, productId: req.body.id, userId };
  delete data.id;

  return CartItems.create(data)
    .then(() => fetchEntireUserCart(userId))
    .then((userCart) => (
      res.status(201).json({
        cart: userCart,
      })
    ))
    .catch((err) => next(err));
});

// Remove item from cart
router.delete('/remove/:userId/:cartItemId', (req, res, next) => {
  const { userId, cartItemId } = req.params;
  const query = { where: { id: cartItemId, userId } };

  return CartItems.destroy(query)
    .then(() => fetchEntireUserCart(userId))
    .then((userCart) => res.status(201).json({
      cart: userCart,
    }))
    .catch((err) => next(err));
});

// Fetch User cart
router.get('/:userId', (req, res, next) => {
  const { userId } = req.params;

  return fetchEntireUserCart(userId)
    .then((userCart) => (
      res.status(200).json({
        cart: userCart,
      })
    ))
    .catch((err) => next(err));
});

// User Checkout
const createOrderItemRecords = (allCartItems, orderId) => allCartItems.map((product) => (
  new Promise((resolve) => {
    const orderItemRecord = { ...product, orderId };
    delete orderItemRecord.id;

    return OrderItems.create(orderItemRecord).then(resolve);
  })));

router.post('/checkout/:userId', (req, res, next) => {
  const { userId } = req.params;

  // get all cart items
  fetchEntireUserCart(userId)
    .then((userCart) => {
      // create order metadata
      const orderMetaData = {
        cartItems: userCart,
        orderAddress: req.body.orderAddress || '60 Wall Street, New York City, 10005',
        // eslint-disable-next-line max-len, camelcase
        orderTotal: userCart.reduce((sum, { sale_price, price }) => (sum + (sale_price || price)), 0),
        purchaseDate: (new Date('August 19, 1975 23:15:30')).toDateString(),
        status: 'ordered',
        userId,
      };

      // create order
      return Orders.create(orderMetaData)
        .then((order) => order.dataValues.id)
        // create order item records under orderId
        .then((orderId) => (
          createOrderItemRecords(userCart, orderId)
        ))
        // delete all cart items
        .then(() => CartItems.destroy({ where: { userId } }));
    })
    .then(() => fetchEntireUserCart(userId))
    // return entire order
    .then((userCart) => (
      res.status(201).json({
        cart: userCart,
      })
    ))
    .catch((err) => next(err));
});

module.exports = router;
