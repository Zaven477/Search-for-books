import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBook, fetchBooks } from "../api";
import { setBook, setErrorsBook, setLoadingBook } from "./bookSlice";
import { setBooks, setErrors, setLoading } from "./booksSlice";
import { TBooksQuery } from "./types";

export const getBooks = createAsyncThunk(
  "books",
  async ({ value, page, orderBy }: TBooksQuery, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await fetchBooks(value, page, orderBy);
      dispatch(setBooks(response.data));
      dispatch(setLoading(false));
    } catch (error: unknown) {
      dispatch(setLoading(false));
      dispatch(setErrors(error.message));
    }
  }
);

export const getBook = createAsyncThunk(
  "books",
  async (id: string, { dispatch }) => {
    try {
      dispatch(setLoadingBook(true));
      const response = await fetchBook(id);
      dispatch(setBook(response.data));
      dispatch(setLoadingBook(false));
    } catch (error: unknown) {
      dispatch(setLoadingBook(false));
      dispatch(setErrorsBook(error.message));
    }
  }
);
