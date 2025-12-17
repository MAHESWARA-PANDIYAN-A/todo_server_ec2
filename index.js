import connectDb from "./DB/db.js";


import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import route from "./Routes/todoRoutes.js";

dotenv.config()


const PORT = process.env.PORT || 5000;

const app = express();
//connectivity
connectDb();

//middle wares
app.use(cors());
app.use(express.json());
app.use('/csbs',route);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})


