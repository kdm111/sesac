const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cookieParser())

const myCookieConf = {
  httpOnly : true,
  maxAge : 24 * 60 * 60 * 1000,
}

app.get('/', (req, res) => {
  console.log(req.cookies)
  if (req.cookies == {}) {
    res.render('index', {popup : true});
  } else {
    res.render('index', {popup : false})
  }
});

app.post('/setcookie', (req, res) => {
  res.cookie("showModal", true, myCookieConf)
  res.send("쿠키 설정 완료")
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 힌트
// req 객체
// req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

// res 객체
// res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드
// res.clearCookie(키 값, 옵션): 쿠키를 제거하는 메서드