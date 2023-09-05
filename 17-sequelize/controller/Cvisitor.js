// 옛날 코드 mvc
// const Visitor = require("../model/Visitor.js")
// models/Visitor 객체
const { Visitor } = require("../models")

exports.getIndex = (req, res) => {
  res.render("index")
}
exports.getResiter = (req, res) => {
  res.render("register")
}
exports.getVisitorPage = async (req, res) => {
  // [Before]
  // Visitor.getVisitors((result) => {
  //   // console.log("controller >>", result)
  //   res.render("visitor", {data : result})
  // })

  // [ORM]
  const response = await Visitor.findAll({
    order : [["id", "DESC"]],
  })
  res.render("visitor", {data : response})
}

exports.createVisitor = async (req, res) => {
  // [BEFORE]
  // Visitor.postVisitor(req.body, (insertId) => {
  //   res.send({id : insertId, name : req.body.name, comment : req.body.comment})
  // })

  // [ORM]
  // const {name, comment} = req.body
  // const response = await Visitor.create ({
  //   name,
  //   comment
  // })
  // res.send(response)
  Visitor.create(req.body)
  .then((response) => {
    res.status(201).send(response.dataValues)
  })
}

exports.deleteVisitor = async (req, res) => {
  // [before]
  // const {id} = req.body
  // Visitor.deleteVisitor(id, (result) => {
  //   res.send(result)
  // }) 

  // [ORM]
  // const {id} = req.body
  // const response = await Visitor.destroy({
  //  where : {id : id}
  // })
  // res.send(response)
  Visitor.destroy({
    where : {id : req.body.id}
  })
  .then(() => {
    res.status(204).send(true)
  })
}

exports.getVisitor = (req, res) => {
  // req.query /visitor?id=5 query는 보여도 되는 정보
  // req.params /visitor/:id 
  // [BEFORE]
  // const {id} = req.params
  // Visitor.getVisitor(id, (result) => {
  //   res.json({result})
  // })

  // [ORM]
  Visitor.findOne({
    where : {id : req.params.id}
  })
  .then((response) => {
    res.json(response.dataValues)
  })
}

exports.updateVisitor = (req, res) => {
  // [BEFORE]
  // Visitor.updateVisitor(req.body, () => {
  //   res.json({isUpdated : true})
  // })

  // [ORM]
  // update({변경될 값}, {조건문})
  Visitor.update({
    name : req.body.name,
    comment : req.body.comment,
  }, {
    where : {id : req.body.id}
  })
  .then(() => {
    res.status(201).send()
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

