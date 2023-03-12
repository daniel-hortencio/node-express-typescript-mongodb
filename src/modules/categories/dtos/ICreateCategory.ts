import { ICategory } from "../schemas/Category";

export type ICreateCategory = Omit<ICategory, "_id" | "created_at">