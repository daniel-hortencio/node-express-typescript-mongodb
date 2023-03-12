import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { CATEGORY_ERROR } from "../errors";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
export default class DeleteCategoryService {
    constructor(
        @inject('CategoriesRepository')
        private categories_repository: ICategoriesRepository
    ) { }

    async execute(id_category: string) {
        const category_exists = await this.categories_repository.findById(id_category)

        if (!category_exists) throw new AppError(CATEGORY_ERROR.CATEGORY_DOES_NOT_EXISTS, 404)

        await this.categories_repository.delete(id_category)

    }
}