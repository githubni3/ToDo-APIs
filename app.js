import express, { json } from "express";
import studentRouter from "./routes/student.js";
import {config} from 'dotenv'
const app = express();
config({
    path:"./data/config.env",
})
//using middlewares
app.use(json());
app.use(studentRouter);

export default app;