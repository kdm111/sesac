const visitor = require("../model/Visitor.js")

exports.getIndex = (req, res) => {
  res.render("index")
}
exports.getVisitorPage = (req, res) => {
  res.render("visitor", {data : visitor.getVisitors()})
}
exports.get404Page = (req, res) => {
  res.render("404page")
}
