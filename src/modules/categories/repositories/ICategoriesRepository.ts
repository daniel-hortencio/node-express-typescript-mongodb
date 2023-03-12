import { ICreateCategory } from "../dtos/ICreateCategory";
import { IGetCategory } from "../dtos/IGetCategory";
import { IUpdateCategory } from "../dtos/IUpdateCategory";

interface ICategoriesRepository {
    create(body: ICreateCategory): Promise<void>;
    find(): Promise<IGetCategory[]>;
    findById(id_Category: string): Promise<IGetCategory | undefined>;
    update(id_Category: string, body: IUpdateCategory): Promise<void>;
    delete(id_Category: string): Promise<void>;
}

export { ICategoriesRepository } 