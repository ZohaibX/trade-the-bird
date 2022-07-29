const express = require('express');
const jwt = require('jsonwebtoken');
const {
  BadRequestException,
  NotAuthorizedError,
} = require('@zbtickets/common');
const currentUser = require('../../middlewares/current-user');
const Comment = require('./model');
const { User } = require('../auth/model/model');
const router = express.Router();
const Reply = require('./model.replies');
require('dotenv').config(); //? to use dotenv file

// ! Postman must be used in https version

router.get('/api/comments/get-all-comments', async (req, res) => {
  const comments = await Comment.find();

  console.log(comments);
  res.send(comments);
});

router.get('/api/comments/get-all-replies', async (req, res) => {
  const replies = await Reply.find();

  console.log(replies);
  res.send(replies);
});

module.exports = router;
