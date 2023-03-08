import { useAppDispatch } from "../hooks";
import { resetBooks } from "../store/booksSlice";
import { getBooks } from "../store/effects";

interface IFilterProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterByCategory = ({ setFilter }: IFilterProps) => {
  const dispatch = useAppDispatch();

  const Category = (option: string) => {
    dispatch(resetBooks([]));
    dispatch(getBooks({ value: option, page: 0 }));
    setFilter(option);
  };

  return (
    <div>
      <span className="filterCategories">Categories</span>
      <select
        className="selectForm"
        onChange={(event) => Category(event.target.value)}
      >
        <option value="all">all</option>
        <option value="art">art</option>
        <option value="biography">biography</option>
        <option value="computers">computers</option>
        <option value="history">history</option>
        <option value="medical">medical</option>
        <option value="poetry">poetry</option>
      </select>
    </div>
  );
};
