import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
