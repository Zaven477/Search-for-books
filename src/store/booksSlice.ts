import { createSlice } from "@reduxjs/toolkit";
import { IBooks } from "../types";


export type TBooksState = {
  books: IBooks[];
  totalItemsBooks: string;
  values: string;
  loading: boolean;
  errors: string;
  currentIndex: number;
  isButtonDisabled: boolean
}


const initialState: TBooksState = {
  books: [],
  totalItemsBooks: "",
  values: "",
  loading: false,
  errors: "",
  currentIndex: 30,
  isButtonDisabled: false
};

const booksSlice = createSlice({
  name: "countsBooks",
  initialState,
  reducers: {
    resetBooks: (state, action) => {
      state.books = action.payload;
    },
    setBooks: (state, action) => {
      state.books = [...state.books, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setValues: (state, action) => {
      state.values = action.payload;
    },
    setTotalItemsBooks: (state, action) => {
      state.totalItemsBooks = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = state.currentIndex + action.payload;
    },
    resetCurrentIndex: (state) => {
      state.currentIndex = 30;
    },
    setIsButtonDisabled: (state, action) => {
      state.isButtonDisabled = action.payload;
    },
  },
});

export const {
  setBooks,
  setLoading,
  setErrors,
  setValues,
  setTotalItemsBooks,
  setCurrentIndex,
  resetBooks,
  setIsButtonDisabled,
  resetCurrentIndex
} = booksSlice.actions;

export default booksSlice.reducer;