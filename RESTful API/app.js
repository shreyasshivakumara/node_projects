const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import routes - Middleware
const postRoute = require('./routes/route');

app.use('/posts',postRoute);


//Routes - 2
app.get('/ps',(req,res) =>{
    res.write("We are at posts!");
    res.end();
});

// Connect to the DB
mongoose.connect('mongoDB://localhost/subscribers',
{useNewUrlParser : true},
() => {
    console.log("Connected to DB!");
});


// Listen to the app
app.listen(3000)