import mongoose from "mongoose";
import app from "./app.js";
import dotenv from 'dotenv'
dotenv.config()


//Database connection
const connectDb = async function () {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to database Succesfully !!")
    } catch (error) {
        console.log("Something went wrong while connecting: ", error)
        process.exit(1)
    }
}


//Port connecting info
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});

//Calling DB 
connectDb();