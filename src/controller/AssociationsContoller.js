const db = require('../DB/dbConnection');
const Actor = db.Actors;
const Movie = db.Movies;
const movieWithactor = async (req,res)=>{
    try {

        const data = await Movie.findAll({include:Actor});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = {
    movieWithactor
}