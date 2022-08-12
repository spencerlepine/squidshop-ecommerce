const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../../database/connection');

const { User } = db;

// eslint-disable-next-line consistent-return
router.post('/', (req, res, next) => {
  if (!req.body.password || !req.body.email || !req.body.firstName || !req.body.lastName) {
    return res.sendStatus(401);
  }

  return User.findAll({
    where: {
      email: req.body.email,
    },
  })
    .then(async (data) => {
      const existingUser = data && data.length === 1 && data[0].dataValues;
      if (!existingUser) {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const userDetails = {
          email: req.body.email,
          password: hashPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        };

        // To get the Id from the newly created user
        // .then((data) => data.dataValues.id)
        // const newUserId = data.dataValues.id;
        return User.create(userDetails)
          .then(() => res.sendStatus(201))
          .catch((err) => {
            console.error(err);
            return res.status(500).json({ error: err });
          });
      }

      return res.sendStatus(401);
    })
    .catch((err) => next(err));
});

module.exports = router;