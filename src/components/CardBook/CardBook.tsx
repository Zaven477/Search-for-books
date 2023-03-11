import { Link } from "react-router-dom";
import "./style.css";

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
          <img src={image} alt="" className="size"/>
        </Link>
        <p>{categories}</p>
        <p className="title-font">{title}</p>
        <p className="authors-font">{authors}</p>
      </div>
    </div>
  );
};
