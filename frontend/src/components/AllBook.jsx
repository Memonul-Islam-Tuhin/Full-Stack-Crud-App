import React from "react";
import axios from "axios";

const AllBook = () => {
  const [bookData, setBookData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/viewbook")
      .then((res) => {
        console.log("API Response:", res.data);
        setBookData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:3000/api/deletebook/${id}`,
      );

      console.log("Delete response:", response.data);

      alert("Book deleted successfully!");

      // Remove deleted book from table
      setBookData((prevData) => prevData.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);

      if (error.response) {
        console.error("Backend error:", error.response.data);

        alert(
          error.response.data.message ||
            error.response.data.error ||
            "Failed to delete book",
        );
      } else {
        alert("Backend server is not running!");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-6 p-4">
      <h1 className="text-2xl mb-3 font-bold">AllBook</h1>

      <table className="w-150 border-collapse border border-gray-300 shadow-sm text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-700">
              Book Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-700">
              Book Author
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-700">
              Book Price
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bookData?.map((books, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-gray-600">
                {books.book_name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-600">
                {books.book_author}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-600">
                {books.book_price}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-600 underline hover:text-blue-600">
                <a href={`updatebook/${books._id}`}>Edit</a>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-600 underline hover:text-blue-600">
                <a href="#" onClick={() => handleDelete(books._id)}>
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBook;
