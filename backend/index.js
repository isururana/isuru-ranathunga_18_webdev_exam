import express, { json, response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Recipe } from "./models/recipeModel.js";
import recipeRoute from "./routes/recipeRoute.js"
import cors from 'cors';

const app = express();

//Middleware to parse request body
app.use(express.json());

//MiddleWare to handle cors policy
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to Recipe Sharing Platform');
});

app.use('/recipes', recipeRoute);   

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App connected to Database")
        app.listen(PORT, () => {
            console.log(`App is listening to PORT:${PORT}`);
        });
    })
    .catch((error) =>{
        console.log(error);
    });