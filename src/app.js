const express = require('express');
const app = express();
const MovieRouter = require('./router/movieRouter');
const ActorRouter = require('./router/actorRouter');
const ActorMovieRouter = require('./router/actorMovieRouter');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/movie',MovieRouter);
app.use('/actor',ActorRouter)
app.use('/getdata',ActorMovieRouter)


const PORT = process.env.PORT;
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is listening at ${PORT}`);
});

