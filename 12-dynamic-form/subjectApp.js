const express = require("express")
const path = require("path")
const app = express()
const PORT = 8080

app.set("view engine", "ejs")
app.use("/public", express.static(__dirname + "/static"))
app.set("views", "./views")

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.listen(PORT, () => {
  console.log(`${PORT} listening`)
})

app.get("/", (req, res) => {
  // const obj = {}
  // obj["PORT"] = PORT
  // obj["image"] = "/public/cafe.jpeg"
  res.render("index", {})
})

const id = '1'
const pw = '1'

app.post("/axios/post", (req, res) => {
  console.log(req.body)
  if (id === req.body.id && pw === req.body.pw) {
    res.json({isLogin : true})
  } else {
    res.status(401).json({isLogin : false})
  }
})