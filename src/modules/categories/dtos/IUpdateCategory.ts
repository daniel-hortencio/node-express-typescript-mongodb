import { ICategory } from "../schemas/Category";

export type IUpdateCategory = Omit<ICategory, "_id" | "created_at">