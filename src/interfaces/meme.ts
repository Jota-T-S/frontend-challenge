import { Category } from "./category";

export interface Meme {
  _id?: string;
  id?: string;
  name?: string;
  description?: string;
  file?: string;
  categories?: Category[];
  likeCount?: number;
  userId?: string;
}
