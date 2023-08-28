const express = require("express")
const router = express.Router()
const controller = require("../controller/Cvisitor.js")

router.get("/", controller.getIndex)
router.get("/visitors", controller.getVisitorPage)
router.get("*", controller.get404Page)

module.exports = router;

