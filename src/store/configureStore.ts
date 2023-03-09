import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "./booksSlice";
import BookReducer from "./bookSlice";

export const store = configureStore({
  reducer: {
    books: BooksReducer,
    book: BookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
