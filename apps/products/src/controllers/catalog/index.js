/* eslint-disable consistent-return */
const express = require('express');
const models = require('../../database/models');

const router = express.Router();

/*
-----EXAMPLE QUERY------
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
    rating_rate: { $gt: 3 },
    // limit the result set to 10 rows, $per_partition_limit is also supported
    $limit: 10,
  };
*/
const FindProduct = (next, query, options = {}, callback) => (
  models.instance.product.find(query, { allow_filtering: true, ...options }, (err, data) => {
    if (err) {
      return next(err);
    }
    callback(data);
  })
);

const handleSearchRequest = (searchQuery) => (req, res, next) => {
  const search = `${searchQuery}%`;
  const query = { title: { $like: search }, category: { $like: search }, $limit: 10 };

  FindProduct(next, query, {}, (data) => {
    res.status(200).json({
      products: data.filter((p) => p.title),
    });
  });
};

router.get('/', (req, res, next) => {
  const { query: searchQuery } = req.query;

  if (searchQuery) {
    console.log('Handling search catalog query!'); // TODO
    return handleSearchRequest(searchQuery)(req, res, next);
  }

  const query = {
    price: { $gt: 0, $lte: 100 },
    rating_rate: { $gt: 3 },
    $limit: 10,
  };

  FindProduct(next, query, {}, (data) => {
    res.status(200).json({
      products: data,
    });
  });
});

module.exports = router;
