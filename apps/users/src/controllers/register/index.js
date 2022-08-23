const express = require('express');
const router = express.Router();

const UserData = require('./UserData');
const db = require('../../database/connection');
const { User } = db;

router.post('/', async (req, res, next) => {
  const user = new UserData(req.body)

  if (!(await user.validateUserData())) {
    return res.sendStatus(401);
  }

  return User.findAll({ where: { email: req.body.email } })
    .then(async (data) => {
      const userAlreadyExists = !(data && data.length === 1 && data[0].dataValues)
      if (userAlreadyExists) {
        await user.generateHashedPassword()
        return User.create(user.getData())
          .then(() => res.sendStatus(201))
      }

      return res.sendStatus(401);
    })
    .catch((err) => next(err));
});

module.exports = router;
