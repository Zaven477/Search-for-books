import { FormEvent, useState } from "react";
import { resetBooks } from "../store/booksSlice";
import { getBooks } from "../store/effects";
import { useAppDispatch } from '../hooks';



export const BookSearch = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();   

    
    
    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
     
        if(value.trim().length === 0) {
           return;
        }
        
        dispatch(resetBooks([]));
        dispatch(getBooks({ value: value, page: 0 }))
        setValue('');

    }

    return (
    <div>
        <h1>Search for books</h1>
         <form onSubmit={ handleSubmit }>
            <input type="text" 
                   name="name" 
                   className="width" 
                   onChange={ (event) => setValue(event.target.value) }
                   value={value}
                   />
            <input type="submit" value="Search" className="btn"/>
         </form>
    </div>
    )
}