const express = require('express');
const db = require('../../database');

const { User } = db;

const router = express.Router();

router.get('/:userId', (req, res) => {
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
    .catch((err) => (
      res.status(500).json({
        message: 'Unable to find user profile',
        error: err,
      })
    ));
});

router.post('/create', (req, res) => {
  const userDetails = req.body;

  return User.create(userDetails)
    .then((data) => {
      res.status(201);
      return res.json({
        message: 'Successfully added user',
        userId: `${data.dataValues.id}`,
      });
    })
    .catch((err) => (
      res.status(409).json({
        message: 'Email address already in use',
        error: err,
      })
    ));
});

router.put('/:userId/update', (req, res) => {
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
    .catch((err) => (
      res.status(500).json({
        message: 'Error updating user profile',
        error: err,
      })
    ));
});

module.exports = router;
