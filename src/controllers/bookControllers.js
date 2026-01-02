const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    
  }catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch books. Please try again later.",
    });
  }
};
const getSingleBookById = async (req, res) => {};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      return res.status(201).json({
        success: true,
        message: "New Book added successfully!",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Unable to add the book. Please try again later.",
    });
  }
};
const updateBookById = async (req, res) => {};
const deleteBookById = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
};
