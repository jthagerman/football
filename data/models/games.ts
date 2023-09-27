import { Schema, model, models } from "mongoose";

const MODEL_NAME = "games";

const gameSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  homeTeamID: {
    type: Schema.Types.ObjectId,
    ref: "Teams",
    required: true,
  },
  awayTeamID: {
    type: Schema.Types.ObjectId,
    ref: "Teams",
    required: true,
  },
  homeTeamScore: {
    type: Number,
    required: true,
  },
  awayTeamScore: {
    type: Number,
    required: true,
  },
  seasonID: {
    type: Number,
    required: true,
    ref: "Seasons", // Reference to the Seasons model
  },
  losingTeamID: {
    type: Schema.Types.ObjectId,
    ref: "Teams",
    required: true,
  },
  winningTeamID: {
    type: Schema.Types.ObjectId,
    ref: "Teams",
    required: true,
  },
  week: {
    type: Number,
    required: true,
  },
  cancelled: {
    type: Boolean,
    required: false,
  },
  forfeit: {
    type: Boolean,
    required: false,
  },
  played: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const Games = models[MODEL_NAME] || model(MODEL_NAME, gameSchema);

export default Games;
