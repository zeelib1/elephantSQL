require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MovieController = require('./src/controllers/MovieController')
const router = require('./src/router/router')



app.use(bodyParser.urlencoded({extended:true}))
app.get('/movies/',router);  //get all the movies
app.post('/movies/', router); //add a movie in db
app.get('/movies/:id', router); //get movie by id
app.get('/movies/rating/:id', router);

app.delete('/movies/:id', router); //delete movie from db
app.put('/movies/:id', router); //update movie by id

app.use( (req, res) => {
  res.status(404);
  res.send('You must be a coding newbie! But keep on!.......pihh!!...Clownie!')
  })

app.listen(3000, () => {
    console.log("Express server running on port 3000")
})



