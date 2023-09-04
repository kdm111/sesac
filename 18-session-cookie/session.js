const express = require('express');
const app = express();
const PORT = 8080;
const session = require("express-session")

app.set('view engine', 'ejs');
app.set("views", "./views")
app.use(express.static(__dirname  + "/static"))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// Session 미들웨어 등록
const mySessionSecretKey = "123"
app.use(session({
  secret : `${mySessionSecretKey}`, // 쿠키 안정 전송을 위한 쿠키 서명 값
  resave : false, // 세션에 수정 사항이 생기지 않아도 요청마다 세션을 다시 저장
  saveUninitialized : true, // 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할 지 설정
  // store : "" // 세션 데이터의 저장 장소 설정
  cookie : {
    httpOnly : true, // http 프로토콜에서도 세션 사용 가능
    // maxAge : 60 * 1000, // 60s 쿠키 수명
  }
}))


app.get('/', (req, res) => {
  res.render("session")
});

app.get("/set", (req, res) => {
  req.session.name = "홍길동", // {name : "홍길동"},
  res.send("세션 설정 완료")
  
})

app.get("/name", (req, res) => {
  // req.sessionID : session의 아이디, req.session.name {name : value}
  console.log(req.session)
  res.json({"id" : req.sessionID, "name" : req.session.name})  
})

app.get("/destroy", (req, res) => {
  // 삭제한 뒤 이동
  // 세션 id는 계속해서 부과된다. 따라서 지워지지 않는다.
  // 세션이 파괴된 후 id가 재할당된다.
  req.session.destroy((err) => {
    if (err) {
      console.log(err)
      return ;
    }
    res.status(302).redirect("/name") // 주소로 이동
  })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});



// 세션 정리
// 1. 세션 설정
// req.session.key = value
// 2. 세션 사용
// req.session.key로 값을 확인
// 3. 세션 삭제
// req.session.destroy(function(err) {})


// express-session : 미들웨어에 의해 암호화된 쿠키 내용 (현재 세션 아이디)
// req.sessionID