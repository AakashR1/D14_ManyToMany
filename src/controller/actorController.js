const db = require('../DB/dbConnection');
const Actor = db.Actors;
const Movie = db.Movies;

const addActor =async (req,res)=>{
    try {
        console.log(req.body);
        await Actor.create(req.body);
        res.send('actor added...')
    } catch (error) {
        console.log(error);
        res.send(error);
    }

}


module.exports = {
    addActor
}