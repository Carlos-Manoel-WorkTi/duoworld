export default interface BookDTO {
  id: number;
  title: string;
  author: string;
  link: string;
  rating: number;
  tags: string[];
  description: string;
  publicationDate?: string; 
  pageCount?: number;
  publisher?: string; 
  language?: string;
}
