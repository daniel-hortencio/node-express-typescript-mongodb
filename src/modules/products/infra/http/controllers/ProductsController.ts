import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateProduct } from "../../../dtos/ICreateProduct";
import { IUpdateProduct } from "../../../dtos/IUpdateProduct";
import CreateProductService from "../../../services/CreateProductService";
import DeleteProductService from "../../../services/DeleteProductService";
import GetProductsService from "../../../services/GetProductsService";
import UpdateProductService from "../../../services/UpdateProductService";

class ProductsController {
    async createProduct(req: Request, res: Response) {
        const {
            name,
            price,
            description,
            categories,
            brand,
        } = req.body as ICreateProduct

        const service = container.resolve(CreateProductService)

        await service.execute({
            name,
            price,
            description,
            categories,
            brand
        });

        return res.status(201).send()
    }

    async findProducts(req: Request, res: Response) {
        const service = container.resolve(GetProductsService);

        const response = await service.execute();

        return res.status(200).json(response);
    }

    async updateProduct(req: Request, res: Response) {
        const {
            id_product
        } = req.params

        const {
            name,
            price,
            description,
            categories,
            brand
        } = req.body as IUpdateProduct

        const service = container.resolve(UpdateProductService);

        await service.execute(id_product, {
            name,
            price,
            description,
            categories,
            brand
        });

        return res.status(204).send()
    }

    async deleteProduct(req: Request, res: Response) {
        const { id_product } = req.params

        const service = container.resolve(DeleteProductService);

        await service.execute(id_product);

        return res.status(200).send()
    }
}

export default new ProductsController()