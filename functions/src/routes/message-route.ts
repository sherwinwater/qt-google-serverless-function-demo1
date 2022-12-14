/* eslint-disable new-cap */
import {Router} from "express";
import {
  getMessage
} from "../controllers/message-controller";

const messageRouter = Router();
export default messageRouter;

messageRouter.get("/message", getMessage);