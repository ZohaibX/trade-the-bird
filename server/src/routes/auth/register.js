const express = require("express")
const jwt = require('jsonwebtoken');
const { BadRequestException } = require('@zbtickets/common');
const { User } = require('./model/model');
const { validateAuthInput } = require('./validation/validate');
const router = express.Router();
require('dotenv').config(); //? to use dotenv file

// ! Postman must be used in https version

router.post(
  '/api/users/signUp',
  async (req, res ) => {
    const { username, email, password } = req.body;

    const error = validateAuthInput({ username, email, password });
    if (error) throw new BadRequestException(error);

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new BadRequestException('Email is already in use.');

    //? password hashing is in service file and is executed in mongoose model file
    const user = User.build({ username, email, password });
    await user.save();

    //? Generating a JWT token
    const userJwt = jwt.sign(
      { id: user.id, email: user.email } , process.env.JWTKEY , {expiresIn: '1h'}
    );

    res.status(201).send({user , userJwt}); // user document is already editted in model

    // we should send 201 in signUp -- means moving data to db
  }
);

module.exports = router;