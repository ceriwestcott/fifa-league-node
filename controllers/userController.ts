import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../model/userModel";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);

  try {
    const savedData = await newUser.save();
    savedData.hash_password = undefined;
    return res.status(201).json(savedData);
  } catch (error: any) {
    res.status(400);
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Invalid user or password." });
    }

    const isPasswordValid = await user.comparePassword(req.body.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Invalid user or password." });
    }

    return res.json({
      token: jwt.sign(
        { email: user.email, fullName: user.fullName, _id: user._id },
        "RESTFULAPIs"
      ),
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const profile = async (req: Request, res: Response) => {
  return res.json(req.user);
};

export const loginRequired = async (req: Request, res: Response, next: any) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized user!" });
  }
};
