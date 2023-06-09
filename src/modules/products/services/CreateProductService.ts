import { inject, injectable } from "tsyringe";
import { ICreateProduct } from "../dtos/ICreateProduct";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
export default class CreateProductService {
    constructor(
        @inject('ProductsRepository')
        private products_repository: IProductsRepository
    ) { }

    async execute(body: ICreateProduct) {
        await this.products_repository.create(body)
    }
}