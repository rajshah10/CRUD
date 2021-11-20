const express = require('express');
const homeRoute = require('./routes/home');
const club = require('./models/Club');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();



// CONNECTING TO MONGODB
mongoose.connect("mongodb+srv://nimap:nimap@nimap.mi6fq.mongodb.net/Nimap?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(console.log("mongodb is connected successfully"))
    .catch(err=>console.log("An error is occered to connect to db"));





// MIDDLEWARE SETUP 
//VIEW ENGINE SETUP
app.set('view engine', 'ejs');
// STATIC FOLDER SETUP
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(express.json())





// ROUTING 
app.use('/', homeRoute);




// RUNNING SERVER 
const PORT = process.env.PORT || 8000;

// STARTING THE SERVER
app.listen(PORT, ()=>{
    console.log('This app is rrunning on:', PORT);
})