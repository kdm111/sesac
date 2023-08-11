// express 모듈 호출
const express = require("express")
// express를 실행하여 app에 저장
const app = express()
const PORT = 8080

// 임시로 회원 정보를 만들어냄
const idFromDb = "banana"
const pwdFromDb = "1234"


// express에게 템플릿 엔진을 등록하는 과정이 필요하다.
app.set("view engine", "ejs") // 템플릿 엔진 등록
app.set("views", "./views") // 템플릿 엔진 파일 작성 위치
// static 미들웨어 등록
// 주소를 먼저 설정하기 위해 __dirname을 확인한다.
// 그 뒤에 
app.use("/public", express.static(__dirname + "/views/static")) //

// get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// '/' : 서버주소 포트 번호 (localhost:PORT/)
app.get("/", (req, res) => {
  // 응답으로 메시지를 보낸다.
  // res.send("<h1>hello express</h1>")
  // 이미 views라고 폴더를 지정했기 때문에
  // index를 그리라는 명령어를 내리면 된다.
  res.render("index", {
    idFromDb : idFromDb, 
    pwdFromDb : pwdFromDb, 
    btns : ["btn1", "btn2", "btn3"],
    me : {
      name : "JS"
    },
    isLogin : false,
    title : "Main"
  })
})

// 서버가 실행할 PORT를 지정하고 실행했을 때 콘솔 로그를 찍음
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

app.get("/login", (req, res) => {
  res.render("login", {title : "Login"})
})

app.get("/register", (req,res) => {
  res.render("register", {title : "Register"})
})

app.get("/sesac", (req, res) => {
  res.send("<h1>hello sesac page</h1>")
})


