const Register = require("./register")
const SignIn = require("./sign-in")
const CurrentUser = require("./current-user")
const CurrentUserData = require("./current-user-data")
const ChangePassword = require("./change-password")
const Passport = require("./passport")
const SignOut = require("./sign-out")
const { ImageUploads } = require('./image-upload/service')

const GetAllUserAccounts = require("./admin-routes/get-all-user-accounts")
const GetUserDetails = require("./admin-routes/get-user-details")
const WarnAlert = require("./admin-routes/warn-alert")
const BanUser = require("./admin-routes/ban-user")
const UnbanUser = require("./admin-routes/unban-user")

module.exports = (app) => {
  app.use(Register)
  app.use(SignIn)
  app.use(SignOut)
  app.use(CurrentUser)
  app.use(CurrentUserData)
  app.use(ChangePassword)
  app.use(Passport)

  // Admin Routes 
  app.use(GetAllUserAccounts)
  app.use(GetUserDetails)
  app.use(WarnAlert)
  app.use(BanUser)
  app.use(UnbanUser)

  ImageUploads(app)
}