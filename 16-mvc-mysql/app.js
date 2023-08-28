const express = require("express")
const app = express()
const router = require("./routes/index.js")
const PORT = 8080

app.listen(PORT, (req, res) => {
  console.log(`${PORT} listening`)
})

app.set("view engine", "ejs")
app.set("views", "./views")

app.get("public", express.static(__dirname + "/static"))
app.use("/views", express.static(__dirname + "views"))

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/", router)


