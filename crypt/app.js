const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const db = require("./models")
const session = require("express-session")
const router = require("./routes/index.js")
const env = require("dotenv")
env.config()

db.sequelize.sync({force : false}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`listening ${process.env.PORT}`)
  })
})

app.use(session({
  secret : process.env.SESSION_KEY,
  resave : false,
  saveUninitialized : true,
  cookie : {
    httpOnly : true
  }
}))

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.static(__dirname + "/static"))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/", router)
