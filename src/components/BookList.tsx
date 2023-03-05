import { useAppSelector } from '../hooks';
import { ImageBooks } from './ImageBooks';

export const BookList = () => {
    const bookArray = useAppSelector((state) => state.books.books);
    


    return (
        <div>
          { bookArray.map((item: any) => (
               <ImageBooks 
                  key={ item.id }
                  id={ item.id } 
                  image={ item.volumeInfo?.imageLinks?.smallThumbnail }
                  categories={ item.volumeInfo?.categories }
                  title={ item.volumeInfo?.title }
                  authors={ item.volumeInfo?.authors }
                />
            )) }
        </div>
    )
}