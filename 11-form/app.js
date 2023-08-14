const express = require("express")
const app =  express()
const PORT = 8080

app.set("view engine", "ejs")
app.set("/views", "views")

// middleware
// request와 response 중간에서 작업하는 코드
// app.use()를 이용해 등록함

// req-body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.json()) // data를 주고 받을 때 json으로 주고 받는다.
app.use(express.urlencoded({extended : true})) // port로 들어오는 모든 형식의 데이터를 파싱



// 주소 설정 (라우팅)
// get 요청으로 응답하였을 경우 해당하는 ejs를 보여줌
app.get("/", (req, res) => {
  // views의 내부 데이터는 폼에 넣어줄 주소
  // res.render(ejs 경로, {데이터})
  res.render("index", {title : "폼 전송 연습"})
})


// getForm의 데이터를 받을 서버의 주소가 필요하다.
app.get("/getform", (req, res) => {
  // res.send("get 요청 성공")
  // console.log(req.query)
  console.log(req.query)
  res.render("result", {title : "get 유저 정보", userInfo : req.query})
})

// postForm의 데이터를 받을 서버의 주소가 필요하다.
app.post("/postform", (req, res) => {
  // res.send("post 요청 성공")
  res.render("result", {title : "post 유저 정보", userInfo : req.body})
})

app.listen(PORT, () => {
  console.log(`${PORT} opened`)
})