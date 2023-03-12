import { IProduct } from "../schemas/Product";

export type IUpdateProduct = Omit<IProduct, "_id" | "created_at">