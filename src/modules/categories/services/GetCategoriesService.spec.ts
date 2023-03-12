import { ObjectId } from 'mongodb';
import { container } from 'tsyringe';
import Category from '../schemas/Category';


import GetCategoriesService from './GetCategoriesService';

describe('Get Categories service', () => {
    it('Should be able to return all categories', async () => {
        jest.spyOn(Category, 'find').mockResolvedValue([
            {
                _id: "640cc97e9b801b1669539301",
                name: "Guitar",
                description: "Eletric and Acoustic Guitars",
                created_at: "2023-03-11T18:31:45.491Z"
            }
        ])

        const service = container.resolve(GetCategoriesService);

        const response = await service.execute();

        expect(response[0]).toHaveProperty('id_category')
        expect(response[0]).toHaveProperty('name')
        expect(response[0]).toHaveProperty('description')
        expect(response[0]).toHaveProperty('created_at')
    });
});
