import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BooksPage } from './pages/BooksPage';




const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <BooksPage /> } />
        {/* <Route path="books/:id" element={ <BooksById /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;