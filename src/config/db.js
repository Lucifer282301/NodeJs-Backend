const mongoose = require("mongoose");
const ENV = require("../utils/env");

const connectToDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_DB_URI);
    await mongoose.connection.syncIndexes();
    console.log("MongoDB connected successfully - ✅ ");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
