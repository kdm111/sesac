// 이 모듈의 역할
// 경로 선언과 관련된 내용 기술
const express = require("express")
const controller = require("../contoller/Cmain")
const router = express.Router()

router.get("/", (req, res) => {
  controller.main(req, res)
})

router.get("/comments", (req, res) => {
  controller.comments(req, res)
})

router.get("/comment/:id", (req, res) => {
  controller.comment(req, res)
})


// module.exports를 통해 라우터를 내보내야 
// 다른 파일에서 라우터 객체를 사용할 수 있다.
// 라우터 객체에 위의 모든 주소를 추가한 뒤 모듈을 내보낸 것
module.exports = router

