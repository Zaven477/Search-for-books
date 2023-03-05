import { BookList } from "./BookList";
import { BookSearch } from "./BookSearch";


export const Books = () => {
 

  return (
     <div>
       <div className="form">
         <BookSearch />
        </div>
       <BookList />
    </div>
    )

}