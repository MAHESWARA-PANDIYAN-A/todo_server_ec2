
//Define your Model Schema

import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    //todo document Structure
    todo:{
        type:String,
        require:true,
        unique:true
    }


})

//we are creating collection with name called todos with todoSchema

const todoCollection = mongoose.model("todos",todoSchema)

export default todoCollection;