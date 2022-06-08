module.exports = (sequelize,DataTypes)=>{
    const ActorMovies = sequelize.define('ActorMovies',{
        movie_id:{
            type:DataTypes.INTEGER,
            
        },
        actor_id:{
            type:DataTypes.INTEGER,
            
        },
    },{timestamps: false});
    return ActorMovies; 
}