import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BooksPage } from "./pages/BooksPage";
import { BookPage } from "./pages/BookPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="books/:id" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
