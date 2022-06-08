const express =require('express');
const router = express.Router();
const actorController = require('../controller/AssociationsContoller');

router.get('/MovieWithActor',actorController.movieWithactor);

module.exports = router;