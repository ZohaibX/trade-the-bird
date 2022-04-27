const { Password } = require('./password-hashing/hashing');
const express = require("express")
const jwt = require('jsonwebtoken');
const { BadRequestException } = require('@zbtickets/common');
const { User } = require('./model/model');
const { validateAuthInput } = require('./validation/validate');
require('dotenv').config(); //? to use dotenv file
const router = express.Router();

//! Postman must be used in https version

router.post(
  '/api/users/signIn',
  async (req, res) => {
    const { email, password } = req.body;

    const error = validateAuthInput({ email, password });
    if (error) throw new BadRequestException(error);
    //? using next(error) -- error will directly go to the error handling middleware and catch the error and we can send valid responses

    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new BadRequestException('Invalid Credentials');
    //? using next(error) - error will directly go to the error handling middleware and catch the error and we can send valid responses

    const passwordMatch = await Password.compare(
      existingUser.password,
      password
    );
    if (!passwordMatch) throw new BadRequestException('Invalid Credentials');
    //? using next(error) - error will directly go to the error handling middleware and catch the error and we can send valid responses

    //? Generating a JWT token
    const userJwt = jwt.sign(
      { id: existingUser.id, email: existingUser.email },
      process.env.JWTKEY
    );

    res.status(200).send({existingUser , userJwt}); // user document is already editted in model
    // we should send 200 in signIn
  }
);

module.exports = router;
