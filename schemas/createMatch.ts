import { z } from "zod";

const playerSchema = z.object({
  name: z.string(),
  team: z.string(),
});

export const createMatchSchema = z.object({
  home_team: playerSchema,
  away_team: playerSchema,
});

export const updateMatchSchema = z.object({
  id: z.string(),
  home_team_score: z.number(),
  away_team_score: z.number(),
});
