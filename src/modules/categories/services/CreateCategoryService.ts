import { inject, injectable } from "tsyringe";
import { ICreateCategory } from "../dtos/ICreateCategory";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
export default class CreateCategoryService {
    constructor(
        @inject('CategoriesRepository')
        private categories_repository: ICategoriesRepository
    ) { }

    async execute(body: ICreateCategory) {
        await this.categories_repository.create(body)
    }
}