import { Link } from "react-router-dom";

interface ICardProps {
  id: string;
  image: string;
  categories: string[];
  title: string;
  authors: string[];
}

export const CardBook = ({
  id,
  image,
  categories,
  title,
  authors,
}: ICardProps) => {
  return (
    <div className="flex">
      <div className="item">
        <Link to={`books/${id}`}>
          <img src={image} alt="" />
        </Link>
        <p>{categories}</p>
        <p>{title}</p>
        <p>{authors}</p>
      </div>
    </div>
  );
};
