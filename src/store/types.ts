interface ISmallThumBnail {
  smallThumbnail?: string;
}

interface IVolumeInfo {
  imageLinks?: ISmallThumBnail;
  title?: string;
  categories?: string;
  authors?: string;
  description?: string;
}

export interface IBooks {
  kind?: string;
  id?: string;
  etag?: string;
  selfLink?: string;
  volumeInfo?: IVolumeInfo
}

export type TBooksQuery = {
  value: string;
  page: number;
  orderBy?: string;
};
