import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_DB_URI);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongo DB connected!!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.error("ERROR : ", err);
    throw err;
  }
};

export default connectDB;
