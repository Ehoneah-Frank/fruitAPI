import mongoose from "mongoose";
import 'dotenv/config';

const connectionString = process.env.MONGO_URl;


const dbConnection = () =>{
    mongoose.connect(connectionString). then(() =>{
        console.log('Connected to DataBase');
})
}

export default dbConnection;