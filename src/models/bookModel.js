const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
      maxlength: [100, "Book title should not exceed 100 characters"],
    },
    author: {
      type: String,
      required: [true, "Book author name is required"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Book published year is required"],
      min: [1000, "Published year should not be before 1000"],
      max: [new Date().getFullYear(), "Published year cannot be in the future"],
    },
    type: {
      type: String,
      enum: [
        "fiction",
        "non-fiction",
        "biography",
        "fantasy",
        "science",
        "technology",
        "history",
        "self-help",
        "other",
      ],
      default: "other",
    },
  },
  { timestamps: true }
);

BookSchema.index({ title: 1, author: 1 }, { unique: true });

module.exports = mongoose.model("Book", BookSchema);
