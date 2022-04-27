const Register = require("./register")
const SignIn = require("./sign-in")
const CurrentUser = require("./current-user")
const Passport = require("./passport")

module.exports = (app) => {
  app.use(Register)
  app.use(SignIn)
  app.use(CurrentUser)
  app.use(Passport)
}