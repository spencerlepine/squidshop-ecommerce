/* eslint-disable consistent-return */
const express = require('express');
const models = require('../../database/models');

const router = express.Router();

router.get('/', (req, res) => {
  const query = {
    // equal query stays for name='john', also could be written as name: { $eq: 'John' }
    // title: 'Wayfarer Messenger Bag',
    // range query stays for age>10 and age<=20. You can use $gt (>), $gte (>=), $lt (<), $lte (<=)
    price: { $gt: 0, $lte: 100 },
    // IN clause, means surname should either be Doe or Smith
    // surname: { $in: ['Doe', 'Smith'] },
    // like query supported by sasi indexes, complete_name must have an SA
    // complete_name: { $like: 'J%' },
    // order results by age in ascending order.
    // also allowed $desc and complex order like $orderby: {'$asc' : ['k1','k2'] }
    // $orderby: { $asc: 'price' },
    // group results by a certain field or list of fields
    // $groupby: ['age'],
    // limit the result set to 10 rows, $per_partition_limit is also supported
    $limit: 10,
  };

  return models.instance.product.find(query, { allow_filtering: true }, (err, data) => {
    if (err || JSON.stringify(err) === '{}') {
      return res.status(500).json({
        message: 'Error finding products',
        error: JSON.stringify(err),
        err,
      });
    }

    if (!data) {
      return res.status(200).json({
        message: 'Unable to find products',
        products: [],
      });
    }

    if (data) {
      res.status(200);
      return res.json(data);
    }
  });
});

module.exports = router;
