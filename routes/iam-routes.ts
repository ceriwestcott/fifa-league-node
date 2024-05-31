import express from "express";
import { createNewUser } from "../controllers/jwtController";
import {
  loginRequired,
  profile,
  register,
  signIn,
} from "../controllers/userController";
import { validateData } from "../middleware/validationMiddleware";
import { userLoginSchema, userRegisterSchema } from "../schemas/user";
const jwtRouter = express.Router();

jwtRouter.post("/generate-token", createNewUser);
jwtRouter.get("/profile", loginRequired, profile);
jwtRouter.post("/register", validateData(userRegisterSchema), register);
jwtRouter.post("/login", validateData(userLoginSchema), signIn);
export default jwtRouter;
