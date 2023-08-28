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

exports.get404Page = (req, res) => {
  res.render("404page")
}


