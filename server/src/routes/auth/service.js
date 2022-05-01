const Register = require("./register")
const SignIn = require("./sign-in")
const CurrentUser = require("./current-user")
const CurrentUserData = require("./current-user-data")
const ChangePassword = require("./change-password")
const Passport = require("./passport")
const SignOut = require("./sign-out")

module.exports = (app) => {
  app.use(Register)
  app.use(SignIn)
  app.use(SignOut)
  app.use(CurrentUser)
  app.use(CurrentUserData)
  app.use(ChangePassword)
  app.use(Passport)
}