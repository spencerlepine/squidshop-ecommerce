const express = require('express');
const db = require('../../database/connection');

const { Order } = db;

const router = express.Router();

// Create user order
router.post('/:userId/create', (req, res) => {
  const { userId } = req.params;

  const orderDetails = req.body;
  const record = {
    ...orderDetails,
    status: 'ordered',
    userId,
  };

  return Order.create(record)
    .then((newRecord) => {
      res.status(201);
      return res.json({
        message: 'Successfully created order',
        order: newRecord.dataValues,
      });
    })
    .catch((err) => next(err));
});

// Find all orders for a user
router.get('/:userId/all', (req, res) => {
  const { userId } = req.params;
  const query = { where: { userId } };

  return Order.findAll(query)
    .then((data) => {
      if (data) {
        res.status(200);
        return res.json({
          orders: data.map((record) => record.dataValues),
        });
      }

      return res.status(400).json({
        message: 'Unable to find order records',
      });
    })
    .catch((err) => next(err));
});

// Find single order for a user
router.get('/:userId/:orderId', (req, res) => {
  const { userId, orderId } = req.params;
  const query = { where: { userId, id: orderId } };

  return Order.findAll(query)
    .then((data) => {
      if (data && data[0]) {
        res.status(200);
        return res.json(data[0].dataValues);
      }

      return res.status(500).json({
        message: 'Unable to find order record',
      });
    })
    .catch((err) => next(err));
});

// Update user order
router.put('/:userId/:orderId/update', (req, res) => {
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
router.delete('/:userId/:orderId/delete', (req, res) => {
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
