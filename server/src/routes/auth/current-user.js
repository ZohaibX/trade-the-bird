const express = require('express');
const currentUser = require('../../middlewares/current-user');
const { User } = require('./model/model');
const router = express.Router();

router.get('/api/users/currentUser', currentUser, async (req, res) => {
  // currentUser middleware will handle payload extraction from jwt
  // console.log(req.currentUser);
  // req.user is for - data coming from passport
  console.log('req.currentUser is : ', req.currentUser);
  console.log('req.user is : ', req.user);
  res.status(200).send({ currentUser: req.currentUser || req.user || null });
});

module.exports = router;
