import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BooksPage } from "./pages/BooksPage/BooksPage";
import { BookPage } from "./pages/BookPage/BookPage";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="books/:id" element={<BookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
