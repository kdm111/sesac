'use strict'
const userModel = require("./userModel.js")
const Sequelize = require('sequelize'); // 비동기

const config = require(__dirname + '/../config/config.json')["development"]; // 비동기

const db = {};

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = userModel(sequelize, Sequelize)


module.exports = db;
