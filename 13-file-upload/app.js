const express = require("express")
const app = express()
const PORT = 8080
const multer = require("multer")

// multer 설정 코드
const upload = multer({
  // 파일을 업로드하고 그 파일이 저장되는 경로를 지정
  dest :"uploads/",
})

// 경로에 대한 내장 모듈
const path = require("path")
// multer 세부 설정
const uploadDetail = multer({
  // 현재 저장할 공간에 대한 정보
  storage : multer.diskStorage({
    destination(req, file, done) {
      // null은 에러 객체를 의미한다.
      // 에러가 없음을 null로 지정해서 콜백 함수를 호출한 것이다.
      done(null, "uploads/") // done은 콜백 함수
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname) // 파일의 확장자 추출
      // basename(파일이름, 확장자) : 파일의 이름만 추출
      // Date.now()를 통해 얻을 수 있는 이점
      // 1. 파일의 이름이 겹치도록 않게 해준다.
      // 2. 파일의 이름만 보고 저장 시점을 유추할 수 있음.
      // null은 에러 객체를 의미한다.
      // 에러가 없음을 null로 지정해서 콜백 함수를 호출한 것이다.
      done(null, path.basename(file.originalname, ext) + Date.now() + ext)
    }
  }),
  // limits : 파일에 대한 제한을 둠.
  // file size 제한 5MB 이하. 서버의 부담을 줄이기 위함.
  limits : {fileSize : 5 * 1024 * 1024},
})

// multer 메소드
// single("") : 하나의 파일을 업로드할 때 사용하는 메서드
// 클라이언트의 요청이 들어오면 multer 설정(변수)에 따라 파일을 처리한 후 req.file 객체를 생성한다.
// single 내부 인자는 input 태그의 name과 일치해야 한다.
app.post("/upload", uploadDetail.single("userFile"), (req, res) => {
  // req.file에는 파일 업로드 정보가 들어있다.
  // 파일은 업로드 되지만 확장자
  console.log(req.file)
  // req.body에는 파일외의 정보가 객체로 들어가 있다.
  console.log(req.body)
  res.send("upload success")
  // req.body
  // {
  //   fieldname: 'userFile', // 폼에 정의한 nameValue
  //   originalname: 'blackpanther.jpeg', // originalName
  //   encoding: '7bit', // encoding type
  //   mimetype: 'image/jpeg', // file type
  //   destination: 'uploads/', // file dir
  //   filename: '94140fcc2af428c4bb2d6d16f532e068', // dest fileName
  //   path: 'uploads/94140fcc2af428c4bb2d6d16f532e068', // file path
  //   size: 6558 // file size
  // }
})

// array는 여러 파일을 한 번에 업로드할 때 사용한다.
// array는 req.files를 만들어 준다.
app.post("/upload/array", uploadDetail.array("userFiles"), (req, res) => {
  // 파일의 정보가 배열로 찍힌다.
  console.log(req.files)
  console.log(req.body)
  res.send("multiple v1 upload success")
})

// fields() : 여러 파일을 한 번에 각각 인풋에 업로드 할 때
// req.files에서 file 정보를 확인
// fields의 매개 변수로 input 태그의 name을 각각 넣는다.
app.post("/upload/fields", uploadDetail.fields([{name : "userFile1"}, {name : "userFile2"}]), (req, res) => {
  console.log(req.files) // {userFile1 : {...}, userFile2 : {...}}
  console.log(req.body)
  res.send("multiple v2 upload success")
})

// 사용할 템플릿 엔진을 설정
app.set("view engine", "ejs")
// view 템플릿 파일이 모여있는 폴더 설정
app.set("views", "./views")
// css js 등 static 파일이 모여있는 폴더 설정
app.use("/public", express.static(__dirname + "/static"))


// body-parser
// 
// express.urlencoded  
// express 서버로 post 요청을 할 때 사용한다.
// 요청 본문에 있는 데이터를 해석해서 req.body 객체로 만들어 주는 미들웨어
app.use(express.urlencoded({extended : true}))
// express 서버가 JSON 형태의 요청 body를 파싱하기 위해 사용한다.
app.use(express.json())
// 단점으로 이미지나, 동영상 같은 멀티파트 데이터를 처리하지 못한다. multer



const register = multer({
  storage : multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/")
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname)
      done(null, req.body.name + ext)
    }
  })
})

app.get("/", (req, res) => {
  res.render("index")
})
app.get("/register", (req, res) => {
  res.render("register")
})
app.post("/register", register.single("image"), (req, res) => {
  res.send("회원가입 생성 완료")
})

app.listen(PORT, () => {
  console.log(`${PORT} listening`)
})