const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/bookControllers");

// Create a router instance
const router = express.Router();

// All  the routes for book-related operations
router.get("/getBooks", getAllBooks);
router.get("/getBook/:id", getSingleBookById);
router.post("/addBook", addNewBook);
router.put("/updateBook/:id", updateBookById);
router.delete("/deleteBook/:id", deleteBookById);

module.exports = router;
