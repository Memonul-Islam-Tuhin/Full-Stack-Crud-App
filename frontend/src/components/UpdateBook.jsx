import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import {
  formFieldSet,
  inputGroup,
  inputStyle,
  buttonStyle,
} from "../styles/styles";

const UpdateBook = () => {
  const { bid } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = React.useState({
    book_name: "",
    book_author: "",
    book_price: "",
    book_publish_date: "",
  });

  // Get existing book data
  React.useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/book/${bid}`,
        );

        setBookData({
          book_name: response.data.book_name,
          book_author: response.data.book_author,
          book_price: response.data.book_price,
          book_publish_date: response.data.book_publish_date,
        });
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    getBook();
  }, [bid]);

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
      const response = await axios.put(
        `http://localhost:3000/api/updatebook/${bid}`,
        {
          book_name: bookData.book_name,
          book_author: bookData.book_author,
          book_price: Number(bookData.book_price),
          book_publish_date: bookData.book_publish_date,
        },
      );

      navigate("/viewbook");

      console.log("Book updated successfully:", response.data);

      alert("Book updated successfully!");
    } catch (error) {
      console.error("Error updating book:", error);

      if (error.response) {
        console.error("Backend error:", error.response.data);

        alert(error.response.data.error || "Failed to update book");
      } else {
        alert("Backend server is not running!");
      }
    }
  };

  return (
    <div>
      <fieldset style={formFieldSet}>
        <legend>Update Book</legend>

        <div style={inputGroup}>
          <label>Book Name : </label>

          <input
            type="text"
            name="book_name"
            style={inputStyle}
            value={bookData.book_name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroup}>
          <label>Book Author : </label>

          <input
            type="text"
            name="book_author"
            style={inputStyle}
            value={bookData.book_author}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroup}>
          <label>Book Price : </label>

          <input
            type="number"
            name="book_price"
            style={inputStyle}
            value={bookData.book_price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div style={inputGroup}>
          <label>Publish Date : </label>

          <input
            type="date"
            name="book_publish_date"
            style={inputStyle}
            value={bookData.book_publish_date}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="button"
            style={buttonStyle}
            onClick={handleFormSubmit}
            value="Update Book"
            name="UpdateBook"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default UpdateBook;
