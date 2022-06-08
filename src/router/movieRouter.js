const express =require('express');
const router = express.Router();
const movieController = require('../controller/movieController');

router.post('/addMovie',movieController.addMovie)

module.exports = router;