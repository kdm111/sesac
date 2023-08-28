const User = require("../model/User.js")


exports.userRegister = (req, res) => {
  res.render("/user/register")
  // res.redirect()
}