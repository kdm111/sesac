const Visitor = require("../model/Visitor.js")

exports.getIndex = (req, res) => {
  res.render("index")
}
exports.getVisitorPage = (req, res) => {
  Visitor.getVisitors((result) => {
    // console.log("controller >>", result)
    res.render("visitor", {data : result})
  })
}
exports.createVisitor = (req, res) => {
  Visitor.postVisitor(req.body, (insertId) => {
    res.send({id : insertId, name : req.body.name, comment : req.body.comment})
  })
}
exports.deleteVisitor = (req, res) => {
  console.log("controller >>", req.body)
  const {id} = req.body
  Visitor.deleteVisitor(id, (result) => {
    console.log("controller result >>", result)
    res.send(result)
  })
  
}

exports.register = (req, res) => {
  res.render("register")
}
exports.userRegister = (req, res) => {
}
exports.get404Page = (req, res) => {
  res.render("404page")
}


// Representational State Transfer : REST
// 클라이언트와 서버가 어떻게 소통해야 하는가에 대한 가이드라인

// API : application protocol Interface 
// 프로그래밍할 때 필요한 인터페이스

// REST API
// 주소 : 의미를 전다라힉 위해 명사로 구성
// /user : 사용자 정보에 관련된 지원 요청
// /comment : 댓글 관련 자원 요청
// 명사로만 "어떤 동작"해야 하는지 모호하여 http 메소드를 같이 사용

// get : 
// post : 
// patch : 
// put : 
// delete : 

