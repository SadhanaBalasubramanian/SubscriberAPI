const express =require("express");
const app=new express();
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/subscribers",{useNewUrlParser:true});
const db=mongoose.connection;

db.on("error",(error)=>console.error(error));
db.once("open",()=>console.log("DB Connected"));

app.listen(3000,()=>console.log("Server Started"));