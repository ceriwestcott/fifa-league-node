import { Router } from "express";
import { createMatch } from "../controllers/matchController";
import { createPlayer } from "../controllers/playerController";
import { validateData } from "../middleware/validationMiddleware";
import { createMatchSchema } from "../schemas/createMatch";
import { playerSchema } from "../schemas/player";

const postRoutes = Router();
postRoutes.post("/create-match", validateData(createMatchSchema), createMatch);
postRoutes.post("/create-player", validateData(playerSchema), createPlayer);

export default postRoutes;
