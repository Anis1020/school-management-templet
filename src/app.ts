import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routers";
import { notFound } from "./app/errors/notFound";
import { GlobalError } from "./app/errors/GlobalError";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// app router
app.use("/api/v1", router);

//global route
app.use(GlobalError);

//not found route
app.use(notFound);
export default app;
