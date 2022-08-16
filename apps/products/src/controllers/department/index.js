const express = require('express');
const models = require('../../database/models');

const router = express.Router();

// Fetch Department Products
router.get('/:departmentId', async (req, res, next) => {
  const { departmentId } = req.params;
  const query = { category: departmentId, $limit: 20 };

  return models.instance.product.find(query, {}, (err, data) => {
    if (err) {
      return next(err);
    }

    if (data) {
      return res.status(200).json({
        products: data,
      });
    }

    return next('unable to find products');
  });
});

// Fetch Department Products on SALE
router.get('/sale/:departmentId', async (req, res, next) => {
  const { departmentId } = req.params;
  const query = { category: departmentId, $limit: 20, sale_price: { $ne: null } };

  return models.instance.product.find(query, {}, (err, data) => {
    if (err) {
      return next(err);
    }

    if (data) {
      return res.status(200).json({
        products: data,
      });
    }

    return next('unable to find products');
  });
});

module.exports = router;
