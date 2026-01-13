const express = require('express');
const router = express.Router();
const movieController = require('../Controllers/movieController')

router.get('/', movieController.getMovie)

module.exports = router;