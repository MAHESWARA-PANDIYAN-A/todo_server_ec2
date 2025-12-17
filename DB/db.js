// we will handle connectivity between express and mongodb

// const mongoose = require('mongoose') commonjs

import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDb = () =>{
    try{
        mongoose.connect(process.env.MONGODB_URI);  //"mongodb://127.0.0.1.27017/todo"
        console.log("db is connected")
    }
    catch(err) {
        console.log(err);
    }
}

export default connectDb