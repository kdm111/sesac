const express = require("express")
const router = express.Router()
const controller = require("../controller/Cvisitor.js")
const userController = require("../controller/Cuser.js")

router.get("/", controller.getIndex)
router.get("/visitors", controller.getVisitorPage)
router.post("/visitor", controller.createVisitor)
router.delete("/visitor", controller.deleteVisitor)
router.get("/visitor/:id", controller.getVisitor)
router.patch("/visitor", controller.updateVisitor)
// router.get("/register", userController.getResiter)

router.get("*", controller.get404Page)


module.exports = router;

