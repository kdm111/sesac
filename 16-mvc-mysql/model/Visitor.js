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






