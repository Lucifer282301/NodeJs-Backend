const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      return res.status(200).json({
        success: true,
        message: "List of Books fetched successfully!",
        data: allBooks,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No books found in the database.",
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch books. Please try again later.",
    });
  }
};
const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);
    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: "Book not found with the provided ID.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Book details fetched successfully!",
      data: bookDetailsByID,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch books. Please try again later.",
    });
  }
};
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
const deleteBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found with the provided ID.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Book deleted successfully!",
      data: deletedBook,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Unable to delete the book. Please try again later.",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
};
