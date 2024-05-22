import mongoose, { Schema } from "mongoose";

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const matchSchema = new Schema({
  home: {
    name: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    goals: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  away: {
    name: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    goals: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  inPlay: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Match = mongoose.model("Match", matchSchema);
const Player = mongoose.model("Player", playerSchema);
export { Match, Player };
