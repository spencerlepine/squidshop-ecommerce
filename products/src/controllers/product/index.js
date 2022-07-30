const express = require('express');
const { v4: uuid } = require('uuid');
const models = require('../../models');

const router = express.Router();

// Create
router.post('/upload', (req, res) => {
  const productDetails = req.body;
  const newId = uuid();

  const newProduct = new models.instance.Product({
    ...productDetails,
    id: newId,
    created: Date.now(),
  });

  return newProduct.saveAsync(newId)
    .then(() => {
      res.status(201);
      return res.json({
        message: 'Successfully added product',
        productId: newId,
      });
    })
    .catch((err) => {
      res.status(409).json({
        message: 'Unable to create product',
        error: JSON.stringify(err),
      });
    });
});

// Read
router.get('/:productId', (req, res) => {
  const { productId } = req.params;

  return models.instance.Product.findOne({ id: productId })
    .then((data) => {
      if (data) {
        res.status(200);
        return res.json(data);
      }

      return res.status(500).json({
        message: 'Unable to find product record',
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Unable to find product record',
        error: JSON.stringify(err),
      });
    });
});

// Update
router.put('/:productId/update', (req, res) => {
  const { productId } = req.params;
  const productDetails = req.body;

  const query = { id: productId };
  const options = { ttl: 86400, if_exists: true };
  return models.instance.Product.update(query, productDetails, options)
    .then((updatedRecord) => {
      if (updatedRecord) {
        return res.status(201).json(productDetails);
      }

      res.status(409);
      return res.json({
        message: 'Unable to update product record',
      });
    })
    .catch((err) => (
      res.status(500).json({
        message: 'Error updating product record',
        error: err,
      })
    ));
});

// Delete
router.delete('/:productId/delete', (req, res) => {
  const { productId } = req.params;

  const query = { id: productId };

  return models.instance.Product.delete(query)
    .then((deleteSuccess) => {
      if (deleteSuccess) {
        return res.status(201).json({
          message: 'Successfully deleted product record',
        });
      }

      res.status(409);
      return res.json({
        message: 'Unable to delete product record',
      });
    })
    .catch((err) => (
      res.status(500).json({
        message: 'Error deleting product record',
        error: err,
      })
    ));
});

module.exports = router;
