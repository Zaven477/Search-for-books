import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "./types";

type TBookState = {
  book: IBook | null;
  loading: boolean;
  errors: string;
};
const initialState: TBookState = {
  book: null,
  loading: false,
  errors: "",
};

const bookSlice = createSlice({
  name: "currentBook",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
    },
    setLoadingBook: (state, action) => {
      state.loading = action.payload;
    },
    setErrorsBook: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setBook, setLoadingBook, setErrorsBook } = bookSlice.actions;
export default bookSlice.reducer;
