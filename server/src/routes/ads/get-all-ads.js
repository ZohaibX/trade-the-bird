const express = require('express');
const jwt = require('jsonwebtoken');
const {
  BadRequestException,
  NotAuthorizedError,
} = require('@zbtickets/common');
const currentUser = require('../../middlewares/current-user');
const { User } = require('../auth/model/model');
const { validateAuthInput } = require('./validation/validate');
const Ad = require('./model/ad');
const router = express.Router();
require('dotenv').config(); //? to use dotenv file

// ! Postman must be used in https version

router.get('/api/ads/get-all-ads', async (req, res) => {
  const ads = await Ad.find();

  console.log(ads);
  res.status(201).send(ads);
});

module.exports = router;
