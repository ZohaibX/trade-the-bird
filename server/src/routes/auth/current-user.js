const express = require('express');
const auth = require('../../middlewares/auth');
const { User } = require('./model/model');
const router = express.Router();

router.get(
  '/api/users/currentUser',
   auth,
  async (req, res) => {
    // currentUser middleware will handle payload extraction from jwt
    const user = await User.findById(req.userId);
    if (!user) throw new NotFoundError();

    res.status(200).send({ currentUser: user || null });
  }
);

module.exports =  router;
