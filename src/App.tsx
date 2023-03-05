import React from 'react';
import './App.css';
import { Books } from './components/Books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BooksById } from './components/BooksById';




const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Books /> } />
        <Route path="books/:id" element={ <BooksById /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;