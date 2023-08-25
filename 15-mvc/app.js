
const express = require("express")
const app = express()
const PORT = 8080

app.listen(PORT, () => {
  console.log(`${PORT} listening`)
})

// view engine 불러오기
app.set("view engine", "ejs")
app.set("views", "./views")
// static 파일 경로 설정
app.use("/public", express.static(__dirname + "static"))
app.use("/views", express.static(__dirname + "views"))
// 유통 파일 json으로 불러오기
app.use(express.urlencoded({extended : true}))
app.use(express.json())

const indexRouter = require("./routes/index.js")
// port로 express 앱이 실행되고 있음
// localhost에서는 localhost::port/가 기본 경로임
// 라우터가 많아질 경우 router 하나에 모든 경로를 몰아넣는 것은 문제가 있다.
// 따라서 router를 여러개로 만들경우
// app.use("/special", specialRouter)로 하여 또 다른 경로를 결정할 수 있다. 
app.use("/", indexRouter)

app.get("/404", (req, res) => {
  res.render("404page")
})

app.get("*", (req, res) => {
  res.redirect("/404")
})


