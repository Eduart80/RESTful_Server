const express = require('express');
const router = express.Router();
const { searchMovies, getMovieDetails } = require('../Controllers/movieController');


router.get('/search', searchMovies);

router.get('/movies/:id', getMovieDetails) 

module.exports = router;