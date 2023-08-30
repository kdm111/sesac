// 엄격 모드로 사용하여 일반 js 에서 발생할 수 있는 에러를 잡아낸다.
'use strict';

const Sequelize = require('sequelize'); // sequelize 모듈을 불러옴.
// db연결 json을 불러옴 
const config = require(__dirname + '/../config/config.json')["development"];
// 빈 db 객체 생성
const db = {};

const sequelize = new Sequelize(
  config.database, //mvcmysql
  config.username,  // user 
  config.password,  // 1234
  config // object
);

// db라는 변수는 {sequelize = sequelize// connection, Sequelize = Sequelize // package}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// models에 정의되는 테이블은 db객체에 저장
// 
db.Visitor = require("./Visitor.js")(sequelize, Sequelize)
// db를 모듈화해서 내보냄
// db(sequelize, Sequelize, Visitor)
module.exports = db;
