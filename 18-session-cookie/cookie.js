const express = require('express');
const app = express();
const PORT = 8080;
const cookieParser = require("cookie-parser")

app.set('view engine', 'ejs');
app.set("views", "./views")
app.use(express.static(__dirname  + "/static"))
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// 쿠키 파서 사용를 위한 미들웨어 등록
// app.use(cookieParser()) // 일반 쿠키
const SECRET_KEY = "125"
app.use(cookieParser(SECRET_KEY)) // 암호화 쿠키 cookieParser("secretKey")


app.get('/', (req, res) => {
  console.log(req.signedCookies)
  if (req.signedCookies) {
    res.render('cookie')
  }
});

const myCookieConf = {
  // 웹 서버를 통해서만 쿠키 접근 가능하게 만듬
  // document.cookie 차단
  httpOnly : true,
  maxAge : 24 * 60 * 60 * 1000, // millisecond 단위 1분 현업에서는 maxAge를 많이 사용한다.
  signed : true, // 암호화 쿠키 할 때 사용할 옵션
}

app.get("/setCookie", (req, res) => {
  // key, value, option을 받는 cookie 메서드
  // 응답이 아니라 res에 헤더에 쿠키를 셋업 하는 코드
  res.cookie("myCookie", "myValue", myCookieConf) 
  res.send("쿠키 설정 완료")  
})
app.get("/getCookie", (req, res) => {
  // console.log(req.cookies) // [cookie, cookie]
  // {키 : 값, 키 : 값}
  // res.send(req.cookies) // 일반 쿠키
  res.send(req.signedCookies) // 암호화 쿠키
})

app.get("/clearCookie", (req, res) => {
  // 요청 헤더에서 쿠키를 제거한다.
  // signedCookie도 삭제가 된다.
  res.clearCookie("myCookie") 
  res.send()
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

