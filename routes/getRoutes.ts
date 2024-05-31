import { Router } from "express";
import {
  getLastMatch,
  getAllMatches,
  getMatchById,
} from "../controllers/matchController";

const getRouter = Router();

getRouter.get("/lastMatch", getLastMatch);
getRouter.get("/", getAllMatches);
getRouter.get("/:id", getMatchById);

export default getRouter;
