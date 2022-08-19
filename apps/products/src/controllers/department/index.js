const express = require('express');
const models = require('../../database/models');

const router = express.Router();

function shuffleArray(array) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

// Fetch Department Products
router.get('/:departmentId', async (req, res, next) => {
  const { departmentId } = req.params;
  const query = { category: departmentId, $limit: 20 };

  return models.instance.product.find(query, { allow_filtering: true }, (err, data) => {
    if (err) {
      return next(err);
    }

    if (data) {
      return res.status(200).json({
        products: shuffleArray(data),
      });
    }

    return next('unable to find products');
  });
});

// Fetch Department Products on SALE
router.get('/sale/:departmentId', async (req, res, next) => {
  const { departmentId } = req.params;
  const query = {
    category: departmentId,
    price: { $lt: Math.random() * 200, $gt: 10 },
    $limit: 100,
  };

  return models.instance.product.find(query, { allow_filtering: true }, (err, data) => {
    if (err) {
      return next(err);
    }

    if (data) {
      return res.status(200).json({
        products: shuffleArray(data.slice(0, 20).filter((p) => p.sale_price)),
      });
    }

    return next('unable to find products');
  });
});

module.exports = router;
