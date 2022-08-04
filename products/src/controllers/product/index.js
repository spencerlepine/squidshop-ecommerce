const express = require('express');
const { v4: uuid } = require('uuid');
const models = require('../../models');

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

  // .then(() => res.status(201).json({
  //   message: 'Successfully added product',
  //   productId: newId,
  // }))
  // .catch((err) => {
  //   return res.status(409).json({
  //     message: 'Unable to create product',
  //     error: JSON.stringify(err),
  //   });
  // });
});

// Read
router.get('/:productId', async (req, res) => {
  const query = { id: req.params.productId };

  // eslint-disable-next-line max-len
  return models.instance.product.findOne(query, (err, data) => {
    if (err) {
      return res.status(500).json({
        message: 'Unable to find product record',
        error: JSON.stringify(err),
      });
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

router.get('/catalog', (req, res) => {
  const query = {
    // equal query stays for name='john', also could be written as name: { $eq: 'John' }
    // name: 'John',
    // range query stays for age>10 and age<=20. You can use $gt (>), $gte (>=), $lt (<), $lte (<=)
    // age: { $gt: 10, $lte: 20 },
    // IN clause, means surname should either be Doe or Smith
    // surname: { $in: ['Doe', 'Smith'] },
    // like query supported by sasi indexes, complete_name must have an SA
    // complete_name: { $like: 'J%' },
    // order results by age in ascending order.
    // also allowed $desc and complex order like $orderby: {'$asc' : ['k1','k2'] }
    $orderby: { $asc: 'price' },
    // group results by a certain field or list of fields
    // $groupby: ['age'],
    // limit the result set to 10 rows, $per_partition_limit is also supported
    $limit: 10,
  };

  return models.instance.product.find(query, (err, data) => {
    if (err || !data) {
      return res.status(500).json({
        message: 'Unable to find products',
        error: JSON.stringify(err),
      });
    }

    if (data) {
      res.status(200);
      return res.json(data);
    }
  });
});

// Update
router.put('/:productId/update', (req, res) => {
  const { productId } = req.params;
  const productDetails = req.body;

  const query = { id: productId };
  const options = { ttl: 86400, if_exists: true };
  return models.instance.product.update(query, productDetails, options)
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

  return models.instance.product.delete(query)
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
