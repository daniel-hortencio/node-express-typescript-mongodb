import { IProduct } from "../schemas/Product";

export type ICreateProduct = Omit<IProduct, "_id" | "created_at">