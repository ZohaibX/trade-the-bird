const express = require('express');
const jwt = require('jsonwebtoken');
const {
  BadRequestException,
  NotAuthorizedError,
} = require('@zbtickets/common');
const currentUser = require('../../middlewares/current-user');
const Comment = require('./model');
const { User } = require('../auth/model/model');
const Reply = require('./model.replies');
const router = express.Router();
require('dotenv').config(); //? to use dotenv file
const mongoose = require('mongoose');

// ! Postman must be used in https version

router.get('/api/comments/get-user-comments', currentUser, async (req, res) => {
  if (!req.currentUser && !req.user)
    throw new NotAuthorizedError('Not Authorized');

  console.log('hello jee');
  let userId, userTitle, userEmail;
  if (req.user) {
    userId = mongoose.Types.ObjectId(req.user.id);
    userTitle = req.user.username;
    userEmail = req.user.email;
  } else {
    userId = mongoose.Types.ObjectId(req.currentUser.id);
    userTitle = req.currentUser.username;
    userEmail = req.currentUser.email;
  }

  console.log('hello jee');
  const comment = await Comment.find({ userId });

  console.log('hello jee');
  console.log(comment);
  res.send(comment);
});

module.exports = router;
