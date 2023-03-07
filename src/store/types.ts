export interface IBooks {
    kind?: string
    id?: string
    etag?: string
    selfLink?: string
    volumeInfo?: object
 }



export type TBooksQuery = {
   value: string;
   page: number;
   filter?: string
}
