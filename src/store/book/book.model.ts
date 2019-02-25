import { CategoryEnum } from './book.types';

export interface Book {
  id: string;
  title: string;
  category: CategoryEnum;
  description: string;
}
