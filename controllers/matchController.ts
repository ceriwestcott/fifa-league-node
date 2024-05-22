import { Request, Response } from "express";
import { Match } from "../model/models";
import { responseHandler } from "../util/response/responseHandler";

//GET
export const getAllMatches = async (req: Request, res: Response) => {
  try {
    const data = await Match.find();
    responseHandler(res, data, 201);
  } catch (error: any) {
    responseHandler(res, undefined, 400);
  }
};

export const getMatchById = async (req: Request, res: Response) => {
  try {
    const data = await Match.findById(req.params.id);
    responseHandler(res, data, 201);
  } catch (error: any) {
    responseHandler(res, undefined, 400);
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
    responseHandler(res, dataToSave, 201);
  } catch (error: any) {
    responseHandler(res, undefined, 400);
  }
};

export const deleteAllMatches = async (req: Request, res: Response) => {
  try {
    const data = await Match.deleteMany({});
    responseHandler(res, data, 201);
  } catch (error: any) {
    responseHandler(res, undefined, 400);
  }
};

export const updateMatch = async (req: Request, res: Response) => {
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
    responseHandler(res, data, 201);
  } catch (error: any) {
    responseHandler(res, undefined, 400);
  }
};

export const getLastMatch = async (req: Request, res: Response) => {
  try {
    const data = await Match.findOne().sort({ _id: -1 });
    responseHandler(res, data, 201);
  } catch (error: any) {
    responseHandler(res, undefined, 400);
  }
};

export const getBiggestWin = async (req: Request, res: Response) => {
  try {
    const data = await Match.find().sort({ "home.goals": -1 });
    responseHandler(res, data, 201);
  } catch (error: any) {
    responseHandler(res, undefined, 400);
  }
};
