import { useAppSelector, useAppDispatch } from "../hooks";
import { useState } from "react";
import { startIndexPagination } from "../constants";
import { getBooks } from "../store/effects";

interface IValue {
  value: string;
  filter: string;
}

export const Pagination = ({ value, filter }: IValue) => {
  const loadingBooks = useAppSelector((state) => state.books.loading);
  const [indexPagination, setIndexPagination] = useState(startIndexPagination);
  const nextPage = useAppSelector((state) => state.books.hasNextPage);
  const dispatch = useAppDispatch();

  

  const valueOrCategory = value ? value : filter;

  const pagination = () => {
    dispatch(getBooks({ value: `${valueOrCategory}`, page: indexPagination }));
    setIndexPagination(indexPagination + 30);
  };

  return (
    <div>
      {loadingBooks && <p className="text-center">Loading...</p>}
      {nextPage && (
        <button className="btn-more" onClick={pagination} disabled={!nextPage}>
          Load more...
        </button>
      )}
    </div>
  );
};
