import { useState } from "react";
import { BookList } from "../../components/BookList/BookList";
import { BookSearch } from "../../components/BookSearch/BookSearch";
import { BookSorting } from "../../components/BookSorting/BookSorting";
import { FilterByCategory } from "../../components/FilterByCategory/FilterByCategory";
import { Pagination } from "../../components/Pagination/Pagination";
import { useAppSelector } from "../../hooks";
import "./style.css";

export const BooksPage = () => {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");
  const books = useAppSelector((state) => state.books.items);
  const totalBooks = useAppSelector((state) => state.books.totalItems);

  return (
    <div>
      <div className="form">
        <BookSearch value={value} setValue={setValue} />
        <FilterByCategory setFilter={setFilter} />
        <BookSorting value={value} />
      </div>
      <BookList books={books} totalBooks={totalBooks} />
      <Pagination value={value} filter={filter} />
    </div>
  );
};
