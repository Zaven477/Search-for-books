import axios from "axios";
import { MAX_RESULTS_BOOK } from "../constants";

export const fetchBooks = async (
  value: string,
  page: number,
  orderBy?: string
) => {
  const apiUrl = orderBy
    ? `https://www.googleapis.com/books/v1/volumes?q=${value}&orderBy=${orderBy}&startIndex=${page}&maxResults=${MAX_RESULTS_BOOK}`
    : `https://www.googleapis.com/books/v1/volumes?q=${value}&startIndex=${page}&maxResults=${MAX_RESULTS_BOOK}`;

  return await axios.get(apiUrl);
};

export const fetchBook = async (id: string) =>
  await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
