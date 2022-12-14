import express from "express";
import cors from "cors";
import messageRouter from "./routes/message-route";
import * as bodyParser from "body-parser";

const app = express();

app.disable("x-powered-by");
app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use("/v1/", messageRouter);


export default app;
