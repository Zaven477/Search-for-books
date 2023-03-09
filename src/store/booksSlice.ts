import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "./types";

export type TBooksState = {
  items: IBook[];
  totalItems: number;
  loading: boolean;
  errors: string | null;
  hasNextPage: boolean;
};

const initialState: TBooksState = {
  items: [],
  totalItems: 0,
  loading: false,
  errors: "",
  hasNextPage: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    resetBooks: (state, action) => {
      state.items = action.payload;
    },
    setBooks: (state, action) => {
      state.hasNextPage = action.payload.items.length === 30;
      state.items = [...state.items, ...action.payload.items];
      state.totalItems = action.payload.totalItems;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setBooks, setLoading, setErrors, resetBooks } =
  booksSlice.actions;

export default booksSlice.reducer;
