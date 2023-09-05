const { user } = require("../models")
const bcrypt = require("bcrypt")
const e = require("express")
const session = require("express-session")

function hashPassword(pw, saltRounds) {
  return bcrypt.hashSync(pw, saltRounds) // 동기
}
function comparePassword(pw, hashedPw) {
  return bcrypt.compareSync(pw, hashedPw)
}

exports.getIndex = (req, res) => {
  res.render("index", {isLogin : false})
} 


exports.getSignup = (req, res) => {
  res.render("signup")
}

exports.getLogin = (req, res) => {
  res.render("login")
}

exports.getUsers = (req, res) => {
  res.render("users")
}

exports.getProfile = (req, res) => {
  user.findOne({
    where : {id : req.session.userId}
  })
  .then((response) => {
    res.render("profile", response.dataValues)
  })
}
exports.userSignup = (req, res) => {
  req.body.password = hashPassword(req.body.password, 10)
  user.create(req.body)
  .then(() => {
    res.status(201).json({location : "/"})
  })
}


exports.userLogin = (req, res) => {
  user.findOne({
    where : {user_id : req.body.user_id}
  })
  .then((response) => {
    if (response && comparePassword(req.body.password, response.dataValues.password)) {
      console.log(response.dataValues)
      req.session.userId = response.dataValues.id
      res.send()
    }
  })
}

exports.userDelete = (req, res) => {
  console.log(req.session.userId)
  user.destroy( {
    where : {id : req.session.userId}
  })
  .then(() => {
    res.status(204).send()
  })
}