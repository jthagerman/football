import { Schema, model, models } from "mongoose";

const MODEL_NAME = "Seasons";

const seasonSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Teams = models[MODEL_NAME] || model(MODEL_NAME, seasonSchema);

export default Teams;
