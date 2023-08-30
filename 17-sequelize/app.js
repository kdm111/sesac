const express = require("express")
const app = express()
const router = require("./routes/index.js")
const db = require("./models") // index.js를 불러온다.
const PORT = 8080

// force : false db에 테이블이 정의되지 않았다면 정의된 대로 자동 생성
// 정의되어 있다면 그냥 진행
// true는 db에 테이블이 있어도 무조건 생성
db.sequelize.sync( {force : false}).then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`${PORT} listening`)
  })
})

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.static(__dirname + "/static"))

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/", router)



