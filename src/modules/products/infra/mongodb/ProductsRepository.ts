import { ICreateProduct } from "../../dtos/ICreateProduct";
import { IGetProduct } from "../../dtos/IGetProduct";
import { IUpdateProduct } from "../../dtos/IUpdateProduct";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import ProductSchema from "../../schemas/Product";

class ProductsRepository implements IProductsRepository {
    async find() {
        const products = await ProductSchema.find()

        return products.map((product: any) => ({
            id_product: product._id,
            name: product.name,
            price: product.price,
            description: product.description,
            brand: product.brand,
            categories: product.categories,
            created_at: product.created_at
        })) as IGetProduct[]
    }
    async findById(id_product: string): Promise<IGetProduct | undefined> {
        try {
            const product = await ProductSchema.findById(id_product)

            if (!product) return undefined

            return {
                id_product: product?._id,
                name: product?.name,
                price: product?.price,
                brand: product?.brand,
                categories: product?.categories,
                description: product?.description,
                created_at: product?.created_at
            } as unknown as IGetProduct
        } catch (err) {
            return undefined
        }
    }

    async create(body: ICreateProduct): Promise<void> {
        const {
            name,
            brand,
            price,
            description,
            categories
        } = body

        await ProductSchema.create({
            name,
            brand,
            price,
            description,
            categories
        })
    }
    async update(id_product: string, body: IUpdateProduct): Promise<void> {
        await ProductSchema.findByIdAndUpdate({
            _id: id_product
        }, body)
    }
    async delete(id_product: string): Promise<void> {
        await ProductSchema.findByIdAndDelete({
            _id: id_product
        })
    }

}

export { ProductsRepository }