const express = require("express")
const router = express.Router()
const controller = require("../controller/Cvisitor.js")
const userController = require("../controller/Cuser.js")

router.get("/", controller.getIndex)
router.get("/visitors", controller.getVisitorPage)
router.post("/visitor", controller.createVisitor)
router.delete("/visitor", controller.deleteVisitor)

router.get("/user/register", userController.userRegister)

router.get("*", controller.get404Page)


module.exports = router;

