// import React from "react";
// import "./App.css";
import AllBook from "./components/AllBook";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/UpdateBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateBook />} />
        <Route path="/viewbook" element={<AllBook />} />
        <Route path="/updatebook/:bid" element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
