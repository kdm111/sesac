// 파일 질라를 통해 서버에 파일만 업로드
// 환경 변수에는 유료 API나 포트 번호 등등이 올라간다.

const express = require("express")
const app = express()
const dotEnv = require("dotenv")
// 환경 변수 불러옴
dotEnv.config()

const PORT = process.env.PORT


app.get("/", (req, res) => {
  console.log(process.env.NAME)
  console.log(process.env.NODE)
  console.log(process.env.SECRET_KEY)

  res.send("hello world")
})

app.listen(PORT, (req, res) => {
  console.log(`${PORT} listening`)
})


