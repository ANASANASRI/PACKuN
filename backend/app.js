const express=require("express");
const mongoose = require('mongoose');
const app=express();

const loggingMiddelwares=require("./middlewares/loggingMiddelwares")
const route=require("./routes/PRoutes")
app.use(express.urlencoded({extended:true}));
app.use(loggingMiddelwares.loggingParams)
app.use(loggingMiddelwares.loggingUrls) 

require('dotenv').config()

const clients = require("./models/packages.js");

mongoose.connect(process.env.dbURL)
        .then(result=>console.log('connect'))
        .catch(err => console.log(err));

app.use("/packages",route)

app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("<h2> Bienvenue dans notre app express </h2>");
});

app.listen(3000,function(){
    console.log("Sever is running");
});