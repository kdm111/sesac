const express = require("express")
const app = express()
const PORT = 8080
const multer = require("multer")

// multer 설정 코드
const upload = multer({
  // 파일을 업로드하고 그 파일이 저장되는 경로를 지정
  dest :"uploads/",
})
// multer 메소드
// single("") : 하나의 파일을 업로드할 때 사용하는 메서드
// 클라이언트의 요청이 들어오면 multer 설정(변수)에 따라 파일을 처리한 후 req.file 객체를 생성한다.
// single 내부 인자는 input 태그의 name과 일치해야 한다.
app.post("/upload", upload.single("userFile"),  (req, res) => {
  // req.file에는 파일 업로드 정보가 들어있다.
  console.log(req.file)
  // req.body에는 파일외의 정보가 객체로 들어가 있다.
  console.log(req.body)
  res.send("upload success")
})

// 사용할 템플릿 엔진을 설정
app.set("view engine", "ejs")
// view 템플릿 파일이 모여있는 폴더 설정
app.set("views", "./views")
// css js 등 static 파일이 모여있는 폴더 설정
app.use("/public", express.static(__dirname + "/static"))


// body-parser

// express.urlencoded  
// express 서버로 post 요청을 할 때 사용한다.
// 요청 본문에 있는 데이터를 해석해서 req.body 객체로 만들어 주는 미들웨어
app.use(express.urlencoded({extended : true}))
// express 서버가 JSON 형태의 요청 body를 파싱하기 위해 사용한다.
app.use(express.json())
// 단점으로 이미지나, 동영상 같은 멀티파트 데이터를 처리하지 못한다. multer






app.get("/", (req, res) => {
  res.render("index")
})


app.listen(PORT, () => {
  console.log(`${PORT} listening`)
})