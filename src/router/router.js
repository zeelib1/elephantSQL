var express = require('express')
require('dotenv').config()
var router = express.Router()
const bodyParser = require('body-parser');
const MovieController = require('./../controllers/MovieController')

router.use(bodyParser.urlencoded({extended:true}))
router.get('/movies/', MovieController.getMovie);  //get all the movies
router.post('/movies/', MovieController.addMovie); //add a movie in db
router.get('/movies/:id', MovieController.getMovieId); //get movie by id
router.get('/movies/rating/:id', MovieController.getRatings);

router.delete('/movies/:id', MovieController.deleteMovie); //delete movie from db
router.put('/movies/:id', MovieController.updateMovie); //update movie by id

router.use( (req, res) => {
  res.status(404);
  res.send('You must be a coding newbie! But keep on!.......pihh!!...Clownie!')
  })

module.exports = router;