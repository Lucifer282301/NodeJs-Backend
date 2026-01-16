const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, "Username should not exceed 50 characters"],
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password should be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Only allow 'user' or 'admin' roles
      default: "user",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
