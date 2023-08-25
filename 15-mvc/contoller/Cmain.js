const comments = require("../model/comments")

exports.main = (req, res) => {
  res.render("index")
}

exports.comments = (req, res) => {
  res.render("comments", {comments : comments.getCommentsAll()})
}
exports.comment = (req, res) => {
  res.render("comment", {comment : comments.getCommentsAll()[Number(req.params.id) - 1]}, (error, html) => {
    if (error) res.redirect("/404")
    else res.send(html)
  })
}