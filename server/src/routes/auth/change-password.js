const express = require("express")
const jwt = require('jsonwebtoken');
const { BadRequestException } = require('@zbtickets/common');
const { User } = require('./model/model');
const { validateAuthInput } = require('./validation/validate');
const auth = require('../../middlewares/auth');
const { Password } = require('./password-hashing/hashing');
const router = express.Router();
require('dotenv').config(); //? to use dotenv file

// ! Postman must be used in https version

router.post(
  '/api/users/forgetPassword',
  async (req, res ) => {

    const {email} = req.body;
    if(!email || email.length < 5) throw new BadRequestException("Invalid Email Provided!")

    const user = await User.findOne({ email });
    if (!user) throw new BadRequestException('Invalid Credentials - No Email Found!');

    password = Math.floor(10000000 + Math.random() * 90000000); // generate random 8 digit numbers
    user.password = JSON.stringify(password);

    const subject = 'Password Change Requested!'
    const text = `Your new Password is - ${password}`

    // SEND EMAIL HERE 

    await user.save()
    
    res.status(200).send(`Update Password Request Invoked! - ${password}`); 
  }
);

router.post('/api/users/changePassword', auth,  async(req, res) => {

  const {currentPassword, newPassword} = req.body;
  if(!currentPassword || !newPassword || newPassword.length<8 ) throw new BadRequestException("Provide Valid Password")

  const user = await User.findById(req.userId);
  if (!user) throw new BadRequestException('Invalid Credentials - No Email Found!');

  const passwordMatch = await Password.compare(
    user.password,
    currentPassword
  );
  if (!passwordMatch) throw new BadRequestException('Invalid Credentials');

  user.password = newPassword;
  await user.save()

  const subject = 'Password Change Requested!'
  const text = `Your new Password is - ${newPassword}`
  // SEND MAIL HERE -- 

  res.status(200).send(`Update Password Request Invoked! - ${newPassword}`); 
  
})

module.exports = router;