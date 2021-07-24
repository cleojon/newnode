const express = require('express');
const app = express();
const mongoose = require('mongoose');
const model = require('./model/schema.js');
require('dotenv/config');


//connect DB
mongoose.connect(process.env.db_connect,{useNewUrlParser : true, useUnifiedTopology: true}, function(err) {
    if (err) console.log(err);
    if (!err) console.log("Connected to MongoDB");
});

app.use(express.json());

//Routes
app.get('/', async (req, res) => {
    const user = await model.find();
    res.json(user);
});


app.post('/user', async (req, res) => {
    const user = new model({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
    });
    user.save() 
        .then(data => {
        res.json(data);
    })
        .catch(err => {
        res.json({message : err})
    });
});


//listening to the server
app.listen(3000);
