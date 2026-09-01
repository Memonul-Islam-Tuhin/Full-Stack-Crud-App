const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
  },

  book_author: {
    type: String,
    required: true,
  },

  book_price: {
    type: Number,
    required: true,
  },

  book_publish_date: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    enum: ["enable", "disable"],
    default: "enable",
  },
});

const BookModule = mongoose.model("bs_book", BookSchema);

module.exports = BookModule;
