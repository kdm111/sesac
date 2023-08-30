// visitor model 정의
// const db = require("./index.js")

// sequelize models/index.js에서 sequelize,
// Sequelize models/index.js에서 Sequelize
const Visitor = (sequelize, dataTypes) => {
  // modelName, modelAttributes, options
  const model = sequelize.define("visitor", {
    id : {type : dataTypes.INTEGER, allowNull : false, primaryKey : true, autoIncrement : true},
    name : {type : dataTypes.STRING(10), allowNull : false},
    comment : {type : dataTypes.TEXT("medium")},
  }, {
    tableName : "visitor",
    freezeTableName : true,
    charset : "utf8",
    collate : "utf8_general_ci",
    timestamps : false // createdAt updatedAt 컬럼 자동 생성 필요하면 true 필요없다면 false
  })
  return model
}

module.exports = Visitor