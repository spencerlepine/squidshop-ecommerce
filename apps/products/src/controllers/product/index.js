/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable new-cap */
const express = require('express');
const { v4: uuid } = require('uuid');
const models = require('../../database/models');

const router = express.Router();

// Create
router.post('/upload', async (req, res) => {
  const productDetails = req.body;
  const newId = uuid();

  const newProduct = new models.instance.product({
    ...productDetails,
    id: newId,
    created: Date.now(),
  });

  await newProduct.saveAsync(newId);
  return res.status(201).json({
    message: 'Successfully added product',
    productId: newId,
  });
});

// Read
router.get('/:productId', async (req, res, next) => {
  const query = { id: req.params.productId };

  // eslint-disable-next-line max-len
  return models.instance.product.findOne(query, (err, data) => {
    if (err || !data) {
      return next(err || 'Unable to find product');
    }

    if (data) {
      res.status(200);
      return res.json(data);
    }

    return res.status(500).json({
      message: 'Unable to find product record',
    });
  });
});

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

// Fetch Related Products
router.get('/related/:productId', async (req, res, next) => {
  const query = { id: req.params.productId, $limit: 30 };
  // get this product
  // get the category
  // query similar in category

  return models.instance.product.findOne(query, (err, data) => {
    if (err) {
      return next(err);
    }

    if (data) {
      return models.instance.product.find({ category: data.category }, {}, (findErr, related) => {
        if (findErr) {
          return next(findErr);
        }

        if (related) {
          const filterProducts = related.filter((p) => p.id !== req.params.productId);
          const relatedProducts = shuffleArray(filterProducts).slice(0, 10);
          return res.status(200).json({
            products: relatedProducts,
          });
        }
      });
    }

    return res.status(500).json({
      message: 'Unable to find product record',
    });
  });
});

// Update
router.put('/:productId/update', (req, res, next) => {
  const { productId } = req.params;
  const productDetails = req.body;

  const query = { id: productId };
  const options = { ttl: 86400, if_exists: true };
  return models.instance.product.update(query, productDetails, options, (err, updatedRecord) => {
    if (err) {
      return next(err);
    }

    if (updatedRecord) {
      return res.status(201).json(productDetails);
    }

    res.status(409);
    return res.json({
      message: 'Unable to update product record',
    });
  });
});

// Delete
router.delete('/:productId/delete', (req, res, next) => {
  const { productId } = req.params;

  const query = { id: productId };

  return models.instance.product.delete(query, (err, deleteSuccess) => {
    if (err) {
      return next(err);
    }

    if (deleteSuccess) {
      return res.status(201).json({
        message: 'Successfully deleted product record',
      });
    }

    res.status(409);
    return res.json({
      message: 'Unable to delete product record',
    });
  });
});

module.exports = router;
