import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBook } from "../../store/effects";
import parse from "html-react-parser";
import "./style.css";

export const BookPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id || "";
  const book = useAppSelector((state) => state.book.book);
  const loading = useAppSelector((state) => state.book.loading);
  const error = useAppSelector((state) => state.book.errors);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBook(id));
  }, [id, dispatch]);

  if (loading) {
    return <p className="loading-book">Loading...</p>;
  }

  if (error) {
    return <p className="text-error">{error}</p>;
  }

  if (!book) return null;

  return (
    <div>
      <img src={book.volumeInfo?.imageLinks?.smallThumbnail} alt=""  className="image"/>
      <div className="indent">
       <p>{book.volumeInfo?.title}</p>
       <p>{book.volumeInfo?.categories}</p>
       <p>{book.volumeInfo?.authors}</p>
       <p>
        {book.volumeInfo?.description && parse(book.volumeInfo?.description)}
       </p>
      </div>
    </div>
  );
};
