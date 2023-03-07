import { useAppSelector } from "../hooks";
import { IBooks } from "../store/types";
import { CardBook } from "./CardBook";

interface ICardBookProps {
  books: IBooks[];
  totalBooks: number;
  
}

export const BookList = ({ books, totalBooks }: ICardBookProps) => {
  const loadingBooks = useAppSelector((state) => state.books.loading);
  const loadingError = useAppSelector((state) => state.books.errors);
  

  let uniqueBooksList = books.filter(
    (book: IBooks, index: number, arr: IBooks[]) =>
      index ===
      arr.findIndex(
        (u: IBooks) => JSON.stringify(u.id) === JSON.stringify(book.id)
      )
  );

  if (loadingError) {
    return <p className="text-error">{loadingError}</p>;
  }

  if (!totalBooks) {
    return null;
  }

  

  return (
    <div>
      {loadingError && <p className="text-error">{loadingError}</p>}
      {!loadingBooks && <p className="total">Found {totalBooks} results</p>}
      {loadingBooks && <p className="text-center">Loading...</p>}
      {uniqueBooksList.map((item: any) => (
        <CardBook
          key={item.id}
          id={item.id}
          image={item.volumeInfo?.imageLinks?.smallThumbnail}
          categories={item.volumeInfo?.categories}
          title={item.volumeInfo?.title}
          authors={item.volumeInfo?.authors}
        />
      ))}
    </div>
  );
};
