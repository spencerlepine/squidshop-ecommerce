const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../../database');

const { User } = db;

// eslint-disable-next-line consistent-return
router.post('/', async (req, res) => {
  try {
    if (!req.body.password || !req.body.email) {
      return res.redirect('/register');
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const userDetails = {
      email: req.body.email,
      password: hashPassword,
    };

    // To get the Id from the newly created user
    // .then((data) => data.dataValues.id)
    // const newUserId = data.dataValues.id;
    return User.create(userDetails)
      .then(() => res.redirect('/login'))
      .catch(() => res.redirect('/register'));
  } catch (e) {
    return res.redirect('/register');
  }
});

module.exports = router;
