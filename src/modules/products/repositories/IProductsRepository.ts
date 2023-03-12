import { ICreateProduct } from "../dtos/ICreateProduct";
import { IGetProduct } from "../dtos/IGetProduct";
import { IUpdateProduct } from "../dtos/IUpdateProduct";

interface IProductsRepository {
    create(body: ICreateProduct): Promise<void>;
    find(): Promise<IGetProduct[]>;
    findById(id_product: string): Promise<IGetProduct | undefined>;
    update(id_product: string, body: IUpdateProduct): Promise<void>;
    delete(id_product: string): Promise<void>;
}

export { IProductsRepository } 