require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MovieController = require('./src/controllers/MovieController')


app.use(bodyParser.urlencoded({extended:true}))
app.get('/movies/', MovieController.getMovie);  //get all the movies
app.post('/movies/', MovieController.addMovie); //add a movie in db
app.get('/movies/:id', MovieController.getMovieId); //get movie by id
app.get('/movies/rating/:id', MovieController.getRatings);

app.delete('/movies/:id', MovieController.deleteMovie); //delete movie from db
app.put('/movies/:id', MovieController.updateMovie); //update movie by id

app.use( (req, res) => {
  res.status(404);
  res.send('You must be a coding newbie! But keep on!.......pihh!!...Clownie!')
  })

app.listen(3000, () => {
    console.log("Express server running on port 3000")
})



