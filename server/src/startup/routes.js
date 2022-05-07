const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session")
require("dotenv").config()
const cookieSession = require('cookie-session');
const {currentUser} = require('@zbtickets/common');
const AuthRoutes = require("../routes/auth/service");
const AdRoutes = require("../routes/ads/service")
const passport = require("passport");

// middlewares
const isAuth = require("../middlewares/auth");
const error = require("../middlewares/error");

module.exports = function (app) {
  app.set('trust proxy', true); // it will accept every kind of traffic, believing it is coming from nginx
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(error); // it is just a reference of error middleware for error handling


  // for sessions and passport js 
  app.use(
    cookieSession({
      signed: false, 
      secure: process.env.NODE_ENV !== 'test', 
      //? make it secure when having https  
      // secure means cookie session will only work on the https connection
      maxAge: 30 * 24 * 60 * 60 * 1000, // it means 30 days
      keys: [process.env.SECRET],
    })
  );
  // for passport  JS
  app.use(passport.initialize());
  app.use(passport.session())// problem is here
  
  AuthRoutes(app);
  // AdRoutes(app)

  // Cors for axios
  require("../cors/cors")(app);

  // // GQL
  // require("../graphql/service/service")(app);

  // // Multer
  // require("../upload-by-multer/service")(app);

  // // Redis
  // require("../services/cache");
  // we must run a redis server to work with it


};
