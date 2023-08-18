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
  const obj = {}
  obj["PORT"] = PORT
  obj["image"] = "/public/cafe.jpeg"
  res.render("dynamic", {obj})

})

app.get("/ajax", (req, res) => {
  res.send(req.query)
})
app.post("/ajax", (req, res) => {
  res.send(req.body)
})


