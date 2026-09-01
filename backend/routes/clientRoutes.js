const express = require("express");
const router = express.Router();

const Book = require("../modules/Book");

router.post("/addbook", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const newBook = new Book({
      book_name: req.body.book_name,
      book_author: req.body.book_author,
      book_price: Number(req.body.book_price),
      book_publish_date: req.body.book_publish_date,
      status: req.body.status || "enable",
    });

    const saveBook = await newBook.save();

    console.log("Book saved:", saveBook);

    res.status(201).json(saveBook);
  } catch (error) {
    console.error("Add book error:", error);

    res.status(500).json({
      message: "Failed to add book",
      error: error.message,
    });
  }
});

router.get("/viewbook", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
  }
});

router.put("/updatebook/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        book_name: req.body.book_name,
        book_author: req.body.book_author,
        book_price: Number(req.body.book_price),
        book_publish_date: req.body.book_publish_date,
      },
      { new: true, runValidators: true },
    );

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Update book error:", error);

    res.status(500).json({
      message: "Failed to update book",
      error: error.message,
    });
  }
});

router.get("/viewbook/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Get single book error:", error);

    res.status(500).json({
      message: "Failed to get book",
      error: error.message,
    });
  }
});

router.delete("/deletebook/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Book deleted successfully",
      deletedBook,
    });
  } catch (error) {
    console.error("Delete book error:", error);

    res.status(500).json({
      message: "Failed to delete book",
      error: error.message,
    });
  }
});

module.exports = router;
