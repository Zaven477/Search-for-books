import { useState } from "react";
import { BookList } from "../components/BookList";
import { BookSearch } from "../components/BookSearch";
import { FilterByCategory } from "../components/FilterByCategory";
import { Pagination } from "../components/Pagination";
import { useAppSelector } from "../hooks";


export const BooksPage = () => {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState('');
  const books = useAppSelector((state) => state.books.items);
  const totalBooks = useAppSelector((state) => state.books.totalItems);
  
  
  return (
    <div>
      <div className="form">
        <BookSearch value={value} setValue={setValue} />
        <FilterByCategory setFilter={setFilter}/>
      </div>
      <BookList books={books} totalBooks={totalBooks} />
      <Pagination value={value} />
    </div>
  );
};
