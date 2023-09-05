const userModel = (sequelize, dataTypes) => {
  const user = sequelize.define("user", {
    id : {
      type : dataTypes.INTEGER,
      allowNull : false,
      primaryKey : true,
      autoIncrement : true
    },
    user_id : {
      type : dataTypes.STRING(50),
      allowNull : false,
    },
    username : {
      type : dataTypes.STRING(50),
      allowNull : false,
    },
    password : {
      type : dataTypes.STRING(1000),
      allowNull : false
    }
  }, {    
    tableName : "user",
    freezeTableName : true,
    charset : "utf8",
    collate : "utf8_general_ci",
    timestamps : false // createdAt updatedAt 컬럼 자동 생성 필요하면 true 필요없다면 false

  })
  return user
}

module.exports = userModel