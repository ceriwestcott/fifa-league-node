import { z } from "zod";

export const playerSchema = z.object({
  name: z.string(),
});
