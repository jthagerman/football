import { Schema, model, models } from "mongoose";

const MODEL_NAME = "Teams";

const teamSchema = new Schema({
  schoolName: {
    type: String,
    required: true,
  },
  mascot: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  initials: {
    type: String,
    required: true,
  },
  primaryColor: {
    type: String,
    required: true,
  },
  secondaryColor: {
    type: String,
    required: false,
  },
  thirdColor: {
    type: String,
    required: false,
  },
  public: {
    type: Boolean,
    required: true,
    default: true,
  },
  inState: {
    type: Boolean,
    required: true,
    default: true,
  },
  county: {
    type: String,
    required: true,
  },
});

const Teams = models[MODEL_NAME] || model(MODEL_NAME, teamSchema);

export default Teams;
