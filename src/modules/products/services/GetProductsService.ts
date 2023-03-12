import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "../repositories/IProductsRepository";

@injectable()
export default class GetProductsService {
    constructor(
        @inject('ProductsRepository')
        private products_repository: IProductsRepository
    ) { }

    async execute() {
        try {
            const products = await this.products_repository.find()

            return products
        } catch (err) {
            console.log({ err })
        }
    }
}