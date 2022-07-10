const express = require('express');
const admin = require('../../../middlewares/admin');
const { User } = require('../model/model');
const router = express.Router();

router.get(
  '/api/users/get-all-user-accounts',
  admin,
  async (req, res) => {
    const accounts = await User.find({role: "User"});

    res.send(accounts);
  }
);

module.exports =  router;
