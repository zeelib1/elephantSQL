
const client = require('../dbConfig') 

const MovieController = {

// GET ALL THE MOVIES

getMovie: (req, res, next) => {

client.query('SELECT * FROM "movies"')
    .then(data => res.json(data.rows))
    .catch(err => console.log(err) )  
 },

// ADD A MOVIE TO THE DATABASE

 addMovie: (req, res, next) => {
 const {title, director, rating} = req.body //verification of SQL table elements
 if(!title || !director || !rating || title === ""|| director === "" || rating === "" ) {
  res.sendStatus(400).send("Something went wrong with your data")
 return;
     }

 client.query(`INSERT INTO "movies" (title, director, rating) VALUES ('${title}','${director}','${rating}') RETURNING *`)
    .then(data => res.json(data.rows))
    .catch((err)=>{
  if(err){
    res.send(500);
     }
    })
 },

//  DELETE A MOVIE FROM DB

 deleteMovie: (req, res) => {
 const { id } = req.params;
   
 client.query(`DELETE FROM "movies" WHERE id=${id}`)
    .then(data => res.json(data.rows))
    .catch(err => console.log(err));
 },

// SELECT MOVIE BY ID

 getMovieId: (req, res) => {
 const { id } = req.params;

 client.query(`SELECT * FROM "movies" WHERE id=${id}`)
    .then(data => res.json(data.rows))
    .catch(err=> console.log(err));

},

// UPDATE A MOVIE IN DB

 updateMovie: (req, res) => {
 const { title, director, rating} = req.body;
 const { id } = req.params;
       
if(!title && !director && !rating) {
    res.sendStatus(400) //client bad request, no params sent
    return;
     }

 const sqlQuery = 
 `UPDATE "movies"
  SET title = '${title}', 
      director = '${director}', 
      rating = '${rating}'
  WHERE id='${id}' RETURNING *`;

  client.query(sqlQuery)
    .then(data => res.json(data.rows))
    .catch(err => console.log(err));
 },

//  TOP RATED MOVIES

 getRatings:(req, res) => {
 const { id } = req.params;
 const limit = 5;
 const ratingQuery = `SELECT * FROM "movies" ORDER BY rating DESC LIMIT ${limit}`;
 if(!rating || rating === "" ) {
    res.sendStatus(400).send("Something went wrong with your data")
 return;
    }
   
client.query(ratingQuery)
  .then(data => res.json(data.rows))
  .catch(err => console.log(err));
 }

 
}
module.exports = MovieController;