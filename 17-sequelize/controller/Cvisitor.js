const Visitor = require("../model/Visitor.js")

exports.getIndex = (req, res) => {
  res.render("index")
}
exports.getResiter = (req, res) => {
  res.render("register")
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
  const {id} = req.body
  Visitor.deleteVisitor(id, (result) => {
    res.send(result)
  }) 
}
exports.getVisitor = (req, res) => {
  // req.query /visitor?id=5 query는 보여도 되는 정보
  // req.params /visitor/:id 
  const {id} = req.params
  Visitor.getVisitor(id, (result) => {
    res.json({result})
  })
}

exports.updateVisitor = (req, res) => {
  Visitor.updateVisitor(req.body, () => {
    res.json({isUpdated : true})
  })
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

