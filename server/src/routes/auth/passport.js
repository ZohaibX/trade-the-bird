const express = require('express');
const { User } = require('./model/model');
const app = express();
const session = require("express-session")

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");



// //! Cookie-Session -- we are using id in serializing and deserializing, we will send that code in a cookie form
// const cookieSession = require("cookie-session");
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000, // it means 30 days
//     keys: ["secret"],
//   })
// );

app.use(passport.initialize());
app.use(passport.session())// problem is here

//! Passport Service
passport.serializeUser((user, done) => {
  console.log("user from serialize: ", user);
  done(null, user.id); // user's mongo id from database
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  console.log("user from deserial: ", user);
  done(null, user);
}); // after getting that id, we will translate that into the data

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GoogleID,
      clientSecret: process.env.GoogleSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      let user;
      user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = new User({
          googleId: profile.id,
          username: profile.displayName,
          picture: profile._json.picture,
        });
        await user.save();
      }
      done(null, user); // null means there is no error
    }
  )
);

const FacebookStrategy = require("passport-facebook").Strategy;
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FBID,
      clientSecret: process.env.FBSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "gender", "picture"],
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile._json.picture);
      let user;
      user = await User.findOne({ fbId: profile.id });
      if (!user) {
        user = new User({
          fbId: profile.id,
          username: profile.displayName,
          picture: profile._json.picture.data.url,
        });
        await user.save();
      }
      done(null, user); // null means there is no error
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get("/auth/facebook", passport.authenticate("facebook")); //  we cannot use scope property here -- so we have this similar property in FB Strategy

// Callback Route for FB
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/"); // we don't have this route here , but we have this route in client folder , so it will work here
  }
);

// Callback Route for google
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/"); // we don't have this route here , but we have this route in client folder , so it will work here
  }
);

//? Special Routes for both
app.get("/api/current_user", (req, res) => {
  console.log(req.user);
  res.send(req.user); // req.user will automatically be created when user passes through the authentication flow
});

app.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/"); // we don't have this route here , but we have this route in client folder , so it will work here
});

module.exports =  app;
