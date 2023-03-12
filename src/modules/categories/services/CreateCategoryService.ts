import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { ICreateCategory } from "../dtos/ICreateCategory";
import { CATEGORY_ERROR } from "../errors";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
export default class CreateCategoryService {
    constructor(
        @inject('CategoriesRepository')
        private categories_repository: ICategoriesRepository
    ) { }

    async execute(body: ICreateCategory) {
        if (!body.name) throw new AppError(CATEGORY_ERROR.CATEGORY_NAME_IS_REQUIRED)
        await this.categories_repository.create(body)
    }
}