const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의
router.get("/",   controller.index)
router.get("/players", controller.getPlayers)
router.get("/players/:player_id", controller.getPlayer)
router.post("/players", controller.createPlayer)
router.patch("/players/:player_id/team", controller.updatePlayerTeam)
router.delete("/players/:player_id", controller.deletePlayer)


router.get("/teams", controller.getTeams)
router.get("/teams/:team_id", controller.getTeam)
router.patch("/teams/:team_id", controller.updateTeamName)

router.get("/teams/:team_id/players", controller.getAllPlayersOfTeam)

module.exports = router;