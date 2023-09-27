// connectDB.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Football");
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export default connectDB;
