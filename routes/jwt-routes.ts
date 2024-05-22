import express from "express";
import { createNewUser } from "../controllers/jwtController";
const jwtRouter = express.Router();

jwtRouter.post("/generate-token", createNewUser);

export default jwtRouter;
