import mongoose from "mongoose";

let cachedPromise = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (mongoose.connection.readyState === 2 && cachedPromise) {
    return cachedPromise;
  }

  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is missing");
    }

    cachedPromise = mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    const conn = await cachedPromise;
    console.log("✔ Database connected");
    return conn;
  } catch (error) {
    cachedPromise = null;
    console.error("❌ Database connection failed:", error.message);
    throw error;
  }
};

export default connectDB;