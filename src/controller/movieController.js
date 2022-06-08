const db = require('../DB/dbConnection');
const Actor = db.Actors;
const Movie = db.Movies;
const addMovie =async (req,res)=>{
    try {
        await Movie.create(req.body);
        res.send('Movie added...')
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}




module.exports = {
    addMovie,
    
}
