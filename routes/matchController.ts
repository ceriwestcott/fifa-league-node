import { Request, Response } from "express";
import { Match } from "../model/models";

//GET
export const getAllMatches = async (req: Request, res: Response) => {
  try {
    const data = await Match.find();
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getMatchById = async (req: Request, res: Response) => {
  try {
    const data = await Match.findById(req.params.id);
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//POST
export const createMatch = async (req: Request, res: Response) => {
  const data = new Match({
    home: {
      name: req.body.home_team.name,
      team: req.body.home_team.team,
    },
    away: {
      name: req.body.away_team.name,
      team: req.body.away_team.team,
    },
  });
  try {
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAllMatches = async (req: Request, res: Response) => {
  try {
    const data = await Match.deleteMany({});
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMatch = async (req: Request, res: Response) => {
  console.log("Update Match");
  console.log(req.params.id);
  try {
    const data = await Match.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          "home.goals": req.body.home.goals,
          "away.goals": req.body.away.goals,
          inPlay: false,
        },
      },
      { new: true }
    );
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
