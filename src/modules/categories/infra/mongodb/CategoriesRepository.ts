import { ICreateCategory } from "../../dtos/ICreateCategory";
import { IGetCategory } from "../../dtos/IGetCategory";
import { IUpdateCategory } from "../../dtos/IUpdateCategory";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import CategorySchema from "../../schemas/Category";

class CategoriesRepository implements ICategoriesRepository {
    async find() {
        const categories = await CategorySchema.find()

        return categories.map((category: any) => ({
            id_category: category._id,
            name: category.name,
            description: category.description,
            created_at: category.created_at
        })) as IGetCategory[]
    }
    async findById(id_category: string): Promise<IGetCategory | undefined> {
        try {
            const category = await CategorySchema.findById(id_category)

            if (!category) return undefined

            return {
                id_category: category?._id,
                name: category?.name,
                description: category?.description,
                created_at: category?.created_at
            } as unknown as IGetCategory
        } catch (err) {
            return undefined
        }
    }

    async create(body: ICreateCategory): Promise<void> {
        const {
            name,
            description,
        } = body

        await CategorySchema.create({
            name,
            description,
        })
    }
    async update(id_category: string, body: IUpdateCategory): Promise<void> {
        await CategorySchema.findByIdAndUpdate({
            _id: id_category
        }, body)
    }
    async delete(id_category: string): Promise<void> {
        await CategorySchema.findByIdAndDelete({
            _id: id_category
        })
    }

}

export { CategoriesRepository }