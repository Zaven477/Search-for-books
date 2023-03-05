import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setBooks } from './booksSlice';



export const getBooks = createAsyncThunk(
  'books',
    async({ value, page }, { dispatch }) => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&startIndex=${page}&maxResults=30`)
        const { totalItems, items } = response.data;
        dispatch(setBooks(items));
    }
)

