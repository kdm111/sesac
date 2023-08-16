const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});

// 주소를 설정하는 행위를 라우팅이라고 한다.
// 라우트(route) : 주소
// 요청방식(get, post ...) + 요청 주소("/", ...)가 겹치면 안된다.
// hello라는 경로로 get으로 요청을 보낸다. hello라는 경로로 post를 보내는 것도 좋다.
// hello.get, hello.get은 안된다. 둘은 동시에 같은 경로와 메서드를 가지므로 안된다.

// 경로로 요청시 메인페이지를 보여준다.
app.get("/", (req, res) => {
  res.render("main")
})

app.get("/practice1", (req, res) => {
  res.render("practice1")
})

app.get("/practice2", (req, res) => {
  res.render("practice2")
})

app.get("/result1", (req, res) => {
  console.log(req.query)
  res.render("result", {user : req.query})
})
app.post("/result2", (req, res) => {
  console.log(req.body)
  res.render("result", {user : req.body})
})


