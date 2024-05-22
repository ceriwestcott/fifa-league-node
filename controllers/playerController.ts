import { Player } from "../model/models";
import { Request, Response } from "express";
//GET
export const getAllPlayers = async (req: Request, res: Response) => {
  try {
    const data = await Player.find();
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getPlayerById = async (req: Request, res: Response) => {
  try {
    const data = await Player.findById(req.params.id);
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//POST
export const createPlayer = async (req: Request, res: Response) => {
  const data = new Player({
    name: req.body.name,
  });
  try {
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
