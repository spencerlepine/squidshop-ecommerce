const express = require('express');
const bcrypt = require('bcrypt');

const db = require('../../database/connection');
const { generateAccessToken, generateRefreshToken } = require('../generateToken');

const { User } = db;
const router = express.Router();

router.post('/', (req, res, next) => {
  if (!(req.body.email && req.body.password)) {
    return res.sendStatus(401);
  }

  return User.findAll({
    where: {
      email: req.body.email,
    },
  })
    .then(async (data) => {
      const userExists = data && data.length === 1 && data[0].dataValues;

      if (userExists) {
        const userRecord = data[0].dataValues; // hard coded from Sequelize
        const passwordCheck = await bcrypt.compare(req.body.password, userRecord.password);

        if (passwordCheck) {
          // Generate the JWT
          const user = {
            email: req.body.email,
            id: userRecord.id,
          };
          const accessToken = generateAccessToken(user);
          const refreshToken = generateRefreshToken(user);
          res.cookie('accessToken', accessToken, { httpOnly: true });
          res.cookie('refreshToken', refreshToken, { httpOnly: true });
          return res.status(201).json(user);
        }
      }

      return res.sendStatus(403);
    })
    .catch((err) => next(err));
});

module.exports = router;
