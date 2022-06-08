module.exports = (sequelize,DataTypes)=>{
    const Movie = sequelize.define('Movie',{
        movie_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:DataTypes.STRING
    });
    return Movie; 
}