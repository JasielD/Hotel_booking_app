import express from 'express';
import type {Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const port = 3000

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/api/test",async(req:Request,res:Response)=>{
    res.json({message:"hello"})
})

app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})