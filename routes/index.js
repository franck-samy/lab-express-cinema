const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('../views/index');
});

router.get('/movies', (req, res) => {
    Movie.find().then(moviesArr => {
        res.render('movies', { moviesArr });
    })

});

router.get('/movie/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    Movie.find(id).then(singleMovie => {
        res.render('individual-movie/:id', { singleMovie });
        console.log(singleMovie);
    })

});

module.exports = router;
