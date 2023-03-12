import { ObjectId } from 'mongodb';
import { container } from 'tsyringe';
import Category from '../schemas/Category';
import CreateCategoryService from './CreateCategoryService';


describe('Create Category service', () => {
    it('Should be able to create a category', async () => {
        jest.spyOn(Category, 'create').mockResolvedValue({} as any)

        const service = container.resolve(CreateCategoryService);

        try {
            await service.execute({
                name: "New Category",
                description: "Description of new Catgory"
            });

            expect(true).toBeTruthy()
        } catch (err) {
            expect(true).toBeUndefined()
        }
    });
    it('Should generate an error if property name is undefined', async () => {
        jest.spyOn(Category, 'create').mockResolvedValue({} as any)

        const service = container.resolve(CreateCategoryService);

        try {
            await service.execute({
                name: "",
                description: "Description of new Catgory"
            });
        } catch (err) {
            expect((err as any).message).toBe('CATEGORY_NAME_IS_REQUIRED')
            expect((err as any).statusCode).toBe(400)
        }
    });
});
