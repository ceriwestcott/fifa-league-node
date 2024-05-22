import { Router } from "express";
import { authenticateToken } from "../controllers/jwtController";
import {
  getLastMatch,
  getAllMatches,
  getMatchById,
} from "../controllers/matchController";

const getRouter = Router();

getRouter.get("/lastMatch", authenticateToken, getLastMatch);
getRouter.get("/", authenticateToken, getAllMatches);
getRouter.get("/:id", authenticateToken, getMatchById);

export default getRouter;
