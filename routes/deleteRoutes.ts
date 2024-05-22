import { Router } from "express";
import { deleteAllMatches } from "../controllers/matchController";
const deleteRoutes = Router();
deleteRoutes.delete("/delete-all-matches", deleteAllMatches);

export default deleteRoutes;
