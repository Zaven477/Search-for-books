import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "./booksSlice";

export const store = configureStore({
  reducer: {
    books: BooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
