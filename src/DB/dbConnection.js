const dotenv = require('dotenv').config();
const env = dotenv["parsed"]["NODE_ENV"];
const config = require('../config/dbConfig.json')[env];
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const authentication = async ()=>{
    try {
        sequelize.authenticate()
        .then(()=>{
            console.log('Connected...');
        })
    } catch (error) {
        console.log(error);
    }
}
authentication()

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Actors = require('../models/actoresModel.js')(sequelize,DataTypes);
db.Movies = require('../models/moviesModel.js')(sequelize,DataTypes);
db.movieActor  = require('../models/actoreMovieModel')(sequelize,DataTypes);


db.Movies.belongsToMany(db.Actors, {through:'ActorMovies',foreignKey:"movie_id"});
db.Actors.belongsToMany(db.Movies, {through:'ActorMovies',foreignKey:"actor_id"});




db.sequelize.sync({force:false})
.then(()=>{
    console.log('Default sync is done');
})

module.exports = db