import express from "express";
import { validateData } from "../middleware/validationMiddleware";
import { createMatchSchema } from "../schemas/createMatch";
const fifaRouter = express.Router();

import {
  createMatch,
  deleteAllMatches,
  getAllMatches,
  getMatchById,
  updateMatch,
} from "../controllers/matchController";
import { createPlayer } from "../controllers/playerController";
import { playerSchema } from "../schemas/player";
//POST
fifaRouter.post("/create-match", validateData(createMatchSchema), createMatch);
fifaRouter.post("/create-player", validateData(playerSchema), createPlayer);
//DELETE
fifaRouter.delete("/delete-all-matches", deleteAllMatches);

//PUT
fifaRouter.put("/update-match/:id", updateMatch);

fifaRouter.get("/", getAllMatches);
fifaRouter.get("/:id", getMatchById);

export default fifaRouter;
