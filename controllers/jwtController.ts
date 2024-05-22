import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import { Request, Response } from "express";
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: any; // Define the 'user' property
    }
  }
}

export const generateToken = async (username: string) => {
  const secretKey: Secret = process.env.JWT_SECRET || ""; // Replace "your-secret-key" with your actual secret key
  return jwt.sign({ username }, secretKey, {
    expiresIn: "1800s",
  });
};

export const createNewUser = async (req: Request, res: Response) => {
  console.log(req.body.username);
  const token = await generateToken(req.body.username);
  res.json({ token });
};

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: any
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET || "", (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
