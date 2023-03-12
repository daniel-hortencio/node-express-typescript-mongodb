import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
export default class GetCategoriesService {
    constructor(
        @inject('CategoriesRepository')
        private categories_repository: ICategoriesRepository
    ) { }

    async execute() {
        const categories = await this.categories_repository.find()

        return categories
    }
}