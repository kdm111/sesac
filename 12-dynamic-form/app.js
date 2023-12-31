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

app.get("/ajax", (req, res) => {
  res.send(req.query)
})
app.post("/ajax", (req, res) => {
  res.send(req.body)
})

app.get("/axios", (req, res) => {
  res.send(req.query)
})

app.post("/axios", (req, res) => {
  res.send(req.body)
})

app.get("/fetch", (req, res) => {
  console.log(req.query)
  res.send(req.query)
})

app.post("/fetch", (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.get("/axios/get", (req, res) => {
  res.send(req.query)
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

// app.post("/login", (req, res) => {
//   console.log(req.body)
//   if (req.body.id != id || req.body.pw != pw) {
//     res.status(401).json({message : "아이디 혹은 비밀번호가 정확하지 않습니다."})
//   }
// })

