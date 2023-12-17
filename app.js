const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


const app=express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,'public')));


//Use ejs for html templating
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/",(req,res)=>{
    res.render("./boilerplate");
    // res.send("Working Properly");
})

app.listen(8080,()=>{
    console.log("Serving on port 8080");
})