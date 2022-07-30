const express = require('express');

const router = express.Router();

router.get('/:userId', (req, res) => {
  const { userId } = req.params;

  console.log('Requesting userId:', userId);

  // TODO: Get from database
  const findUserInDatabase = (id) => {
    console.log(id);
  };
  const user = findUserInDatabase(userId);

  if (user) {
    res.status(200);
    res.json({
      user,
    });
  } else {
    res.status(404);
    res.json({
      message: 'Unable to find user profile',
    });
  }
});

router.post('/create', (req, res) => {
  const userDetails = req.body;

  // const {
  //   firstName,
  //   lastName,
  //   address,
  //   email
  // } = userDetails;

  // TODO
  const newId = Math.random() * 99999;
  const emailNotTaken = true;

  // TODO: Add to database
  const addUserToDatabase = (newUser) => {
    console.log(newUser);
  };
  addUserToDatabase(userDetails);

  if (emailNotTaken) {
    res.status(201);
    res.json({
      message: 'Successfully added user',
      userId: `${newId}`,
    });
  } else {
    res.status(409);
    res.json({
      message: 'Email address already in use',
    });
  }
});

router.put('/:userId/update', (req, res) => {
  const { userId } = req.params;
  const newUserDetails = req.body;

  // TODO: Add to database
  const updateUserInDatabase = (updatedDetails) => {
    console.log(updatedDetails);
  };
  const updatedRecord = updateUserInDatabase(userId, newUserDetails);

  if (updatedRecord) {
    res.status(201);
    res.json({
      message: 'Successfully updated profile',
      user: updatedRecord,
    });
  } else {
    res.status(400);
    res.json({
      message: 'Missing or invalid changes',
    });
  }
});

module.exports = router;
