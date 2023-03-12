import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateCategory } from "../../../dtos/ICreateCategory";
import { IUpdateCategory } from "../../../dtos/IUpdateCategory";
import Brand from "../../../schemas/Category";
import CreateCategoryService from "../../../services/CreateCategoryService";
import DeleteCategoryService from "../../../services/DeleteCategoryService";
import GetCategoriesService from "../../../services/GetCategoriesService";
import UpdateCategoryService from "../../../services/UpdateCategoryService";

class CategoriesController {
    async createCategory(req: Request, res: Response) {
        const {
            name,
            description,
        } = req.body

        const service = container.resolve(CreateCategoryService)

        await service.execute({
            name,
            description
        });

        return res.status(201).send()
    }

    async findCategories(req: Request, res: Response) {
        const service = container.resolve(GetCategoriesService);

        const response = await service.execute();

        return res.status(200).json(response);
    }

    async updateCategory(req: Request, res: Response) {
        const {
            id_category
        } = req.params

        const {
            name,
            description,
        } = req.body as IUpdateCategory

        const service = container.resolve(UpdateCategoryService);

        await service.execute(id_category, {
            name,
            description
        });

        return res.status(204).send()
    }

    async deleteCategories(req: Request, res: Response) {
        const { id_category } = req.params

        const service = container.resolve(DeleteCategoryService);

        await service.execute(id_category);

        return res.status(200).send()
    }
}

export default new CategoriesController()