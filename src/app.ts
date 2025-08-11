import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routers";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// app router
app.use("/api/v1", router);

//global route

//not found route

export default app;
