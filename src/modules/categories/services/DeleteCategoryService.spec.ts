import { container } from 'tsyringe';
import Category from '../schemas/Category';
import DeleteCategoryService from './DeleteCategoryService';

describe('Delete Category service', () => {
    it('Should be able to delete a category by id', async () => {
        jest.spyOn(Category, 'findById').mockResolvedValue({
            _id: "640cc97e9b801b1669539301",
            name: "Guitar",
            description: "Eletric and Acoustic Guitars",
            created_at: "2023-03-11T18:31:45.491Z"
        })
        jest.spyOn(Category, 'findByIdAndDelete').mockResolvedValue({} as any)

        const service = container.resolve(DeleteCategoryService);

        try {
            await service.execute('640cc97e9b801b1669539301');

            expect(true).toBeTruthy()
        } catch (err) {
            expect(err).toBeUndefined()
        }
    });

    it('Should generate an error if id_category does not founded', async () => {
        jest.spyOn(Category, 'findById').mockResolvedValue(undefined)
        jest.spyOn(Category, 'findByIdAndDelete').mockResolvedValue({} as any)

        const service = container.resolve(DeleteCategoryService);

        try {
            await service.execute('640cc97e9b801b1669539301');

            expect(true).toBeTruthy()
        } catch (err) {
            expect((err as any).message).toBe('CATEGORY_DOES_NOT_EXISTS')
            expect((err as any).statusCode).toBe(404)
        }
    });
});
