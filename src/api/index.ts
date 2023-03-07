import axios from "axios";
import { MAX_RESULTS_BOOK } from "../constants";

export const fetchBooks = async (
  value: string,
  page: number,
  filter?: string
) => {
  const apiUrl = filter
    ? `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=${filter}&startIndex=${page}&maxResults=${MAX_RESULTS_BOOK}`
    : `https://www.googleapis.com/books/v1/volumes?q=${value}&startIndex=${page}&maxResults=${MAX_RESULTS_BOOK}`;

  return await axios.get(apiUrl);
};
