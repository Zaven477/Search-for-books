import { Link } from "react-router-dom"


interface ImageProps {
    id: string
    image: string
    categories: string[]
    title: string
    authors: string[]
}

export const ImageBooks = ({ id, image, categories, title, authors }: ImageProps) => {
   
   
   return (
    <div className="flex">
       <div className="item">
       <Link to={`books/${id}`}><img src={image} alt=""/></Link>
            <p>{ categories }</p>
            <p>{ title }</p>
            <p>{ authors }</p>
      </div>
     </div>
   )
}