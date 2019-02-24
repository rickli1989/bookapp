import { CategoryEnum } from './book.types';

export interface Book {
  id: number;
  title: string;
  category: CategoryEnum;
  description: string;
}
