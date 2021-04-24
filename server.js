require ("dotenv").config();

const express =require("express");
const app=new express();
const mongoose=require("mongoose");

const run = async () => {
     await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    };

run().catch(error => console.error(error));

const db=mongoose.connection;

db.on("error",(error)=>console.error(error));
db.once("open",()=>console.log("DB Connected"));

app.use(express.json())

const subscriberRouter=require("./routes/subscribers");
app.use("/subscribers",subscriberRouter)

app.listen(3000,()=>console.log("Server Started"));