const express = require("express")
const app = express()
const PORT = 8080

// view engine 불러오기
app.set("view engine", "ejs")
app.set("views", "./views")
// static 파일 경로 설정
app.use("/public", express.static(__dirname + "static"))
app.use("/views", express.static(__dirname + "views"))
// 유통 파일 json으로 불러오기
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.listen(PORT, () => {
  console.log(`${PORT} listening`)
})

app.get("/", (req, res) => {
  res.render("index")
})

// 일단 mvc가 있을 때와 없을 때를 비교해보자.
// DB의 데이터
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

app.get("/comments", (req, res) => {
  res.render("comments", {comments : comments})
})

app.get("/comment/:id", (req, res) => {
  // if (!comments[Number(req.params.id) - 1])
  //   res.render("404page")
  res.render("comment", {comment : comments[Number(req.params.id) - 1]}, (error, html) => {
    if (error) res.redirect("/404")
    else res.send(html)
  })

})
app.get("/test/:id/:name", (req, res) => {
  console.log(req.params)
  res.send("done")
})

app.get("/404", (req, res) => {
  res.render("404page")
})

app.get("*", (req, res) => {
  res.redirect("/404")
})
