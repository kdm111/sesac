// http  모듈로 웹 서버 생성하기

// client가 로컬호스트로 요청을 날리면 서버가 응답하는 내용이 없음

// 모듈을 불러옴
const http = require("http")
// fileSystem 모듈
// 파일을 불러오거나 쓸 때 사용
const fs = require("fs")

// 서버 하나 생성, 
// createServer안에 req, res를 받을 수 있음

// const server = http.createServer((req, res) => {
//   // 
//   res.writeHead(200, {"content-type" : "text/html; charset=utf8"}) // 응답 헤더 
//   res.write("<h1>hello, node.js server 안녕</h1>") // 응답 본문
//   res.end("<p>first node.js server</p>")// 응답 본문 작성 후에 응답 종료
// })

// html 파일을 생성하여 응답하기
// 파일을 불러오기 위해 fs 모듈에 존재하는 readFileSync 메서드를 사용한다.
const server = http.createServer((req, res) => {
  // file을 읽다가 어떤 에러로 인해 에러 처리
  try {
    const errorAlert = fs.readFileSync("./index2.html")
    res.writeHead(200, {"content-type" : "text/html; charset=utf8"}) // 응답 헤더 
    // const data = fs.readFileSync("./index.html")
    res.write(fs.readFileSync("./index.html")) // 응답 본문
    res.end()// 응답 본문 작성 후에 응답 종료
  } catch (err) {
    const data = fs.readFileSync("./404.html")
    res.writeHead(404, {"content-type" : "text/html; charset=utf8"})
    console.log(data)
    // console.error(err)
    res.write(data)
    res.end()
  }
})
// 포트 번호 설정
const PORT = 8000
server.listen(PORT, () => {
  console.log(`server listening on ${PORT} port`)
})

// setTimeOut을 이용해 10초 뒤 서버 종료
// setTimeout(()=>{
//   console.log("10s over. server close")
//   server.close()
// }, 10000)

// 서버가 요청을 받았을 때 서버 알림
// server.on("request", (req, res) =>{
//   console.log("req event")
// })


// 클라이언트와 서버가 연결되었을 때 발생
server.on("connection", (req, res) =>{
  console.log("connection event")
})

