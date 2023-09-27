import { Schema, model, models } from "mongoose";

const MODEL_NAME = "Region";
const regionSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const Regions = models[MODEL_NAME] || model(MODEL_NAME, regionSchema);

export default Regions;
