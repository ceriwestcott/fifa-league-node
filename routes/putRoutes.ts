import { Router } from "express";
import { updateMatch } from "../controllers/matchController";
const postRoutes = Router();

postRoutes.put("/update-match/:id", updateMatch);

export default postRoutes;
