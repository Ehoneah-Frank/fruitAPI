import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import dbConnection from "./config/db.js";
import fruitRouter from "./routes/fruit-route.js";
import expressOasGenerator from "express-oas-generator";






// connect to database
await mongoose.connect(process.env.MONGO_URL);
dbConnection();

// create an express app
const fruitApp = express();
expressOasGenerator.handleResponses(fruitApp,{
    alwaysServeDocs: true,
    tags: ['fruits'],
    mongooseModels: mongoose.modelNames(),
});

// use middlewares
fruitApp.use(express.json());

// use routes
fruitApp.use(fruitRouter);


fruitApp.listen(7070, () =>{
    console.log("App is running on port 7070");
});

// SIAP6AiMXSzWGv25

// 