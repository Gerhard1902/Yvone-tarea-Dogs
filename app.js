const express=require('express');
const app= express();
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv/config');

//Middleware
app.use(bodyParser.json());
app.use(cors());
//import Routes
const dogsRoute=require('./routes/dogs');

app.use('/dogs', dogsRoute);


//routes
app.get('/',(req,res)=>{   //post, delete, patch-> updates
    res.send('We are on home');
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=>{
        console.log('connected');
});
//how do we start listening to the server
app.listen(3000);