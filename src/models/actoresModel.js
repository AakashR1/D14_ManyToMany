module.exports = (sequelize,DataTypes)=>{
    const Actor = sequelize.define('Actor',{
        actor_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:DataTypes.STRING
    });
    return Actor; 
}