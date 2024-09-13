import "dotenv/config";
import { applicationContainer } from "../application/container";
import { infrastructureContainer } from "../infrastructure/container";

import express from "express";
import cors from "cors";
import memberRouter from "./routers/member.router";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV == "development")
{
    app.use(cors({ origin: "*" }));
    console.log("[server]: using cors");
}

app.use("/api/v1/member/", memberRouter);

export default app;