import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";

dotenv.config({});

const app = express();
const corsOptions = {
    origin :"http://localhost:5173",
    credentials:true
}


const DATA_BASE_URI = process.env.MONGO_DB_URI;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const PORT = process.env.PORT||4000;

connectDB(DATA_BASE_URI);

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})