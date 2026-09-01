import React from "react";
import axios from "axios";

import {
  formFieldSet,
  inputGroup,
  inputStyle,
  buttonStyle,
} from "../styles/styles";

const CreateBook = () => {
  const [bookData, setBookData] = React.useState({
    book_name: "",
    book_author: "",
    book_price: "",
    book_publish_date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/addbook", {
        book_name: bookData.book_name,
        book_author: bookData.book_author,
        book_price: Number(bookData.book_price),
        book_publish_date: bookData.book_publish_date,
      });

      console.log("Book added successfully:", response.data);

      alert("Book added successfully!");

      setBookData({
        book_name: "",
        book_author: "",
        book_price: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);

      if (error.response) {
        console.error("Backend error:", error.response.data);
        alert(error.response.data.error || "Failed to add book");
      } else {
        alert("Backend server is not running!");
      }
    }
  };

  return (
    <div>
      <fieldset style={formFieldSet}>
        <legend>Add Book</legend>

        <tr style={inputGroup}>
          <td>
            <label>Book Name : </label>
          </td>

          <td>
            <input
              type="text"
              name="book_name"
              style={inputStyle}
              value={bookData.book_name}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>

        <tr style={inputGroup}>
          <td>
            <label>Book Author : </label>
          </td>

          <td>
            <input
              type="text"
              name="book_author"
              style={inputStyle}
              value={bookData.book_author}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>

        <tr style={inputGroup}>
          <td>
            <label>Book Price : </label>
          </td>

          <td>
            <input
              type="number"
              name="book_price"
              style={inputStyle}
              value={bookData.book_price}
              onChange={handleInputChange}
              required
            />
          </td>
        </tr>

        <tr style={inputGroup}>
          <td>
            <label>Publish Date : </label>
          </td>
          <td>
            <input
              type="date"
              name="book_publish_date"
              style={inputStyle}
              value={bookData.book_publish_date}
              onChange={handleInputChange}
            />
          </td>
        </tr>

        <tr>
          <td colSpan={2} align="center">
            <input
              type="button"
              style={buttonStyle}
              onClick={handleFormSubmit}
              value={"Add Book"}
              name="AddBook"
            />
          </td>
        </tr>
      </fieldset>
    </div>
  );
};

export default CreateBook;
