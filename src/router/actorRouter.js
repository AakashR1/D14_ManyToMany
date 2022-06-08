const express =require('express');
const router = express.Router();
const actorController = require('../controller/actorController');

router.post('/addActor',actorController.addActor)

module.exports = router;