const express = require('express');
const currentUser = require('../../middlewares/current-user');
const { User } = require('./model/model');
const router = express.Router();

router.get(
  '/api/users/currentUser',
  currentUser,
  async (req, res) => {
    // currentUser middleware will handle payload extraction from jwt
    console.log(req.currentUser);
    res.status(200).send({ currentUser: req.currentUser || null });
  }
);

module.exports =  router;
