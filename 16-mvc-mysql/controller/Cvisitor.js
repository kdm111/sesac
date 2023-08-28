const Visitor = require("../model/Visitor.js")

exports.getIndex = (req, res) => {
  res.render("index")
}
exports.getVisitorPage = (req, res) => {
  Visitor.getVisitors((result) => {
    // console.log("controller >>", result)
    res.render("visitor", {data : result})
  })
}
exports.createVisitor = (req, res) => {
  Visitor.postVisitor(req.body, (insertId) => {
    res.send({id : insertId, name : req.body.name, comment : req.body.comment})
  })
}

exports.register = (req, res) => {
  res.render("register")
}
exports.userRegister = (req, res) => {
  
}
exports.get404Page = (req, res) => {
  res.render("404page")
}


