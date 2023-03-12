import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { ICreateProduct } from "../dtos/ICreateProduct";
import { PRODUCT_ERROR } from "../errors";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
export default class UpdateProductService {
    constructor(
        @inject('ProductsRepository')
        private products_repository: IProductsRepository
    ) { }

    async execute(id_product: string, body: ICreateProduct) {
        const product_exists = await this.products_repository.findById(id_product)

        if (!product_exists) throw new AppError(PRODUCT_ERROR.PRODUCT_DOES_NOT_EXISTS, 404)

        await this.products_repository.update(id_product, body)
    }
}