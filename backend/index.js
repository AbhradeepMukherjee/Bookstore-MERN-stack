import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';
const app = express();

app.use(express.json())

// app.use(cors({
//     origin: 'http://localhost:5555/',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))
app.use(cors())

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(235).send('Welcome to MERN Stack Tutorial');
})

app.use('/books', bookRoutes)

mongoose
 .connect(mongoDBURL)
 .then(()=>{
    console.log(`App connected to database`)
    app.listen(PORT,()=>{
        console.log(`App is listening to port-${PORT}`)
    });
 })
 .catch((error)=>{
    console.log(error);
 });
 
 