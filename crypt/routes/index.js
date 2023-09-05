const express = require("express")
const Router = express.Router()
const userController = require("../controller/userController")


Router.get("/", userController.getIndex)
Router.get("/signup", userController.getSignup)
Router.post("/signup", userController.userSignup)

Router.get("/login", userController.getLogin)
Router.post("/login", userController.userLogin)

Router.get("/users", userController.getUsers)
Router.get("/profile", userController.getProfile)
Router.delete("/user", userController.userDelete)


module.exports = Router