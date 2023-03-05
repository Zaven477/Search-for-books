import { useParams } from "react-router";
import { useAppSelector } from "../hooks";





export const BooksById = () => {
  const params = useParams();
  const id = params.id;
  const booksByIds = useAppSelector((state: any) => state.books.books.find((item: any) => item.id === id));
  
  

  return (
    <div>
      <img src={booksByIds.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
      <p>{booksByIds.volumeInfo?.title}</p>
      <p>{booksByIds.volumeInfo?.categories}</p>
      <p>{booksByIds.volumeInfo?.authors}</p>
      <p>{booksByIds.volumeInfo?.description}</p>
    </div>
  );
};
