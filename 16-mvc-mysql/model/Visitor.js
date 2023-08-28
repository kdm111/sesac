const mysql = require("mysql")
// db 연결 설정 
const conn = mysql.createConnection({
  host : "localhost", // mysql서버
  user : "user", // 접속하는 유저 이름
  password : "1234", // 비밀번호
  database : "mvcmysql" // 사용하는 db
})

exports.getVisitors = (callBack) => {
  conn.query(`SELECT * FROM visitor ORDER BY id DESC`, (err, rows) => {
    if(err)
      throw err
    callBack(rows)
  })
}
exports.postVisitor = (data, callBack)  => {
  // 매개변수
  // data : 프론트엔드 데이터, 콜백 : 쿼리 실행 후 호출할 함수
  conn.query(`
    INSERT INTO visitor(name, comment)
      VALUES ("${data.name}", "${data.comment}");
  `,(err, rows) => {
    if (err)
      throw (err)
    console.log("model >>", rows.insertId)
    callBack(rows.insertId)
  })
}






