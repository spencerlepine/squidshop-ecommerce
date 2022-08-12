const express = require('express');
const db = require('../../database/connection');

const { User } = db;

const router = express.Router();

router.get('/:userId', (req, res, next) => {
  const { userId } = req.params;

  return User.findByPk(userId)
    .then((data) => {
      if (data) {
        res.status(200);
        return res.json(data);
      }

      return res.status(400).json({
        message: 'Unable to find user profile',
      });
    })
    .catch((err) => next(err));
});

router.post('/create', (req, res, next) => {
  const userDetails = req.body;

  return User.create(userDetails)
    .then((data) => {
      res.status(201);
      return res.json({
        message: 'Successfully added user',
        userId: `${data.dataValues.id}`,
      });
    })
    .catch((err) => next(err));
});

router.put('/:userId/update', (req, res, next) => {
  const { userId } = req.params;
  const userDetails = req.body;
  delete userDetails.id;

  return User.update(userDetails, {
    where: { id: userId },
  })
    .then((num) => {
      if (num[0] === 1) {
        res.status(201);
        return res.json(userDetails);
      }

      res.status(409);
      return res.json({
        message: 'Unable to update user profile',
      });
    })
    .catch((err) => next(err));
});

module.exports = router;
