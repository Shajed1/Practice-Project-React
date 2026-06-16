//import all dependency
const express = require('express');
const router = require('./src/routes/api');
const cors = require('cors');

const app = new express();

const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const helmet = require('helmet');

//cors origin
app.use(cors());

//security
app.use(helmet());
app.use(hpp());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

let limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3000
});

app.use(limiter);

//mongodb connection
let URL = "mongodb+srv://shajed1:shajed1@cluster0.onjdyfa.mongodb.net/Taskmanager?appName=Cluster0";


mongoose.connect(URL)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    });

//route implement
app.use('/api', router);

//404
/*
app.use("*",(req,res)=>{
    res.status(404).json({data: "Not Found"});
});
*/
module.exports = app;