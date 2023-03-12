import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
export default class GetCategoriesService {
    constructor(
        @inject('CategoriesRepository')
        private categories_repository: ICategoriesRepository
    ) { }

    async execute() {
        try {
            const categories = await this.categories_repository.find()

            return categories
        } catch (err) {
            console.log({ err })
        }
    }
}