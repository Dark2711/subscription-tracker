import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB_URI = process.env.DB_URI;
if (!DB_URI) {
  throw new Error("Please define mongo db url in env file");
}

const connectDB = () => {
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Connected to MongoDB Database✌️");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB👎", err);
    });
};

export default connectDB;
