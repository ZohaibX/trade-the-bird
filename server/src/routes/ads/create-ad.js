const { NotAuthorizedError } = require('@zbtickets/common');
const express = require('express');
const currentUser = require('../../middlewares/current-user');
const AWS = require('aws-sdk');
const { v1: uuid } = require('uuid');
const Ad = require('./model/ad');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const router = express.Router();

const s3 = new AWS.S3({
  signatureVersion: 'v4',
  accessKeyId: process.env.AWS_PUBLIC,
  secretAccessKey: process.env.AWS_PRIVATE,
});

// get urls
router.get(
  '/api/ads/ad-upload/get-url/',
  // Replace
  currentUser,
  async (req, res) => {
    if (!req.currentUser && !req.user)
      throw new NotAuthorizedError('U r not authorized');
    // we want our key to be like this -- myUserId/12122113.jpeg -- where filename will be used as a random unique string

    let id;
    // Replace
    if (req.currentUser) id = req.currentUser.id;
    else if (req.user) id = req.user._id;
    // id = 'fakeId';

    let key = `${id}/${uuid()}.jpeg`;

    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'trade-the-bird',
        ContentType: 'image/jpeg',
        Key: key,
      },
      (err, url) => res.send({ key, url, err })
    );
  }
);

router.post(
  '/api/ads/ad-upload/',
  // Replace
  currentUser,
  async (req, res) => {
    if (!req.currentUser && !req.user)
      throw new NotAuthorizedError('Not Authorized');

    let userId;
    if (req.user) userId = req.user.id;
    else userId = req.currentUser.id;
    // userId = mongoose.Types.ObjectId('62cb7681fc043b1d716e00b7'); // Fake
    console.log('hello');

    const {
      adTitle,
      adDescription,
      adPrice,
      contact,
      locationDetails,
      city,
      birdName,
      breedName,
      images,
    } = req.body;
    // images is an array -- of string (url)

    console.log(
      adTitle,
      adDescription,
      adPrice,
      contact,
      locationDetails,
      city,
      birdName,
      breedName,
      images
    );

    console.log('2');
    /// https://trade-the-bird.s3.amazonaws.com/[Image Key] -- Save This
    let imageUrls = [];
    for (let i = 0; i < images.length; i++) {
      imageUrls.push(
        `https://trade-the-bird.s3.amazonaws.com/${images[i].key}`
      );
    }

    console.log('3');

    const ad = Ad.build({
      userId,
      title: adTitle,
      birdTitle: birdName,
      breedName: breedName,
      description: adDescription,
      price: adPrice,
      contactNumber: contact,
      images: imageUrls,
      locationDetails: locationDetails,
      city: city,
    });
    await ad.save();
    res.send(ad);
  }
);

module.exports = router;
