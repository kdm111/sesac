const e = require("express")
const {Player, Profile, Team} = require("../models/index")
const { Op } = require("sequelize")

// TODO: 컨트롤러

exports.index = (req, res) => {
  res.render("index")
}

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll()
    res.send(players)
  } catch (err){
    res.send(err)
  }
}
exports.getPlayer = async (req, res) => {
  try {
    const player = await Player.findOne({
      where : {player_id : req.params.player_id}
    })
    res.send(player)

  } catch (err) {
    res.send(err)
  }
}

exports.createPlayer = async (req, res) => {
  try {
    const response = await Player.create({
      name : req.body.name,
      age : req.body.age,
      team_id : req.body.team_id
    })
    res.send(response)
  } catch (err) {
    res.send(err)
  }
}

exports.updatePlayerTeam = async (req, res) => {
  try {
    const response = await Player.update({
      team_id : req.body.team_id
    }, {
      where : { player_id : req.params.player_id}
    })
    res.send(response)
  } catch (err) {
    res.send(err)
  }
}

exports.deletePlayer = async (req, res) => {
  try {
    const response = await Player.destroy({
      where : {player_id : req.params.player_id}
    })
    if (response === 0) {
      res.send("이미 삭제된 선수입니다.")
    } else {
      res.send("삭제되었습니다.")
    }
  } catch (err) {
    res.send(err)
  }
}

exports.getTeams = async (req, res) => {
  try {
    if (req.query.sort  !== "asc" && req.query.sort  !== "desc") {
      orderArr = ""
    }
    if (req.query.search) {

      const response = await Team.findAll({
        attributes : ["team_id", "name"], // 배열 안에 attr값을 집어넣음
        where : {
          name: { [Op.like]: `%${req.query.search}%` },
        }
      })
      res.send(response)
    } else {
      const response = await Team.findAll({
        attributes : ["team_id", "name"], // 배열 안에 attr값을 집어넣음
        order : orderArr, // order : [[키1, 순서], [키, 순서]], ASC || DESC
      })
      res.send(response)
    }
  } catch (err) {
    res.send(err)
  }
}

exports.getTeam = async (req, res) => {
  try {
    const response = await Team.findOne({
      attributes : ["team_id", "name"],
      where : {team_id : req.params.team_id}
    })
    res.send(response)
  } catch (err) {
    res.send(err)
  }
}
exports.updateTeamName = async (req, res) => {
  try {
    const response = await Team.update({
      name : req.body.name
    }, {
      where : {team_id : req.params.team_id}
    })
    res.send(response)
  } catch (err) {
    res.send(err)
  }
}

exports.getAllPlayersOfTeam = async (req, res) => {
  try {
    const team = await Team.findOne({
      where : {team_id : req.params.team_id},
      include : [{model : Player, attributes : ["team_id", "name", "age"]}],
    })
    res.send(team)
  } catch (err) {
    res.send(err)
  }
}