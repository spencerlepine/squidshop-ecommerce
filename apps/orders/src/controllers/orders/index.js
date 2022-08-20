const express = require('express');
const db = require('../../database/connection');

const { order: Order, OrderItem: OrderItem } = db;

const router = express.Router();

const getAllUserOrders = (userId) => (
  new Promise((resolve) => Order.findAll({ where: { userId } })
    .then((data) => {
      const userOrdersMetaData = data.map((l) => l.dataValues);

      // Combine order metadata with cart items
      resolve(Promise.all(
        userOrdersMetaData.map((orderMetaData) => new Promise((resolveInner) => {
          OrderItem.findAll({ where: { orderId: orderMetaData.id } })
            .then((itemData) => (
              itemData.map((i) => i.dataValues)
            ))
            .then((cartItems) => {
              const thisEntireOrder = { ...orderMetaData };
              thisEntireOrder.orderId = orderMetaData.id;
              thisEntireOrder.cartItems = cartItems;
              resolveInner(thisEntireOrder);
            });
        })),
      ));
    })));

// Create user order
router.post('/:userId/create', (req, res, next) => {
  const { userId } = req.params;

  const orderDetails = req.body;
  if (!orderDetails.cartItems) {
    next('Order receipt must include cartItem purchases');
  }
  const record = {
    ...orderDetails,
    purchaseDate: new Date(),
    status: 'ordered',
    userId,
  };

  // Create cart items
  const createCartItemRecords = (orderId) => orderDetails.cartItems.map((product) => (
    new Promise((resolve) => {
      const orderItemRecord = { ...product, orderId };
      delete orderItemRecord.id;

      return OrderItem.create(orderItemRecord).then(resolve);
    })));

  // Create Order metadata record
  return Order.create(record)
    .then((order) => (
      // Save all cart item purchase record
      Promise.all(createCartItemRecords(order.dataValues.id))
    ))
    .then(() => (
      getAllUserOrders(userId)
        .then((allOrders) => {
          res.status(201);
          return res.json({
            orders: allOrders,
          });
        })))
    .catch((err) => next(err));
});

// Find all orders for a user
router.get('/:userId', (req, res, next) => {
  const { userId } = req.params;

  getAllUserOrders(userId)
    .then((allOrders) => {
      res.status(200);
      return res.json({
        orders: allOrders,
      });
    })
    .catch((err) => next(err));
});

// Find single order for a user
router.get('/:userId/:orderId', (req, res, next) => {
  const { userId, orderId } = req.params;
  const query = { where: { userId, id: orderId } };

  return Order.findAll(query)
    .then((data) => {
      const orderData = JSON.parse(JSON.stringify(data[0].dataValues));

      return OrderItem.findAll({ where: { id: orderId } })
        .then((orderItems) => {
          orderData.cartItems = orderItems[0].dataValues;
          orderData.orderId = orderId;
          res.status(200);
          return res.json(orderData);
        });
    })
    .catch((err) => next(err));
});

// Update user order
router.put('/:userId/:orderId/update', (req, res, next) => {
  const { userId, orderId } = req.params;

  const orderDetails = req.body;
  delete orderDetails.id;

  return Order.update(orderDetails, {
    where: { id: orderId, userId },
  })
    .then((num) => {
      if (num[0] === 1) {
        res.status(201);
        return res.json(orderDetails);
      }
      res.status(409);
      return res.json({
        message: 'Unable to update order record',
      });
    })
    .catch((err) => next(err));
});

// Delete user order
router.delete('/:userId/:orderId/delete', (req, res, next) => {
  const { userId, orderId } = req.params;
  const query = { where: { userId, id: orderId } };

  return Order.destroy(query)
    .then((deleteSuccess) => {
      if (deleteSuccess) {
        return res.status(201).json({
          message: 'Successfully deleted order record',
        });
      }

      res.status(409);
      return res.json({
        message: 'Unable to delete order record',
      });
    })
    .catch((err) => next(err));
});

module.exports = router;
