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
      { id: existingUser.id, email: existingUser.email, username: existingUser.username },
      process.env.JWTKEY
    );

    //? Storing the token in a cookie -- session object
    req.session.jwt = userJwt;

    // now this cookie will be automatically send with this route -- as a cookie
    //? cookies will only show up on https -- so we can use https://ticketing.dev/api/users/signUp

    // we will get a long encrypted string, we will take that string to base64decode.org and decode it and then we will get our jwt

    res.status(200).send(existingUser);
  }
);

module.exports = router;
