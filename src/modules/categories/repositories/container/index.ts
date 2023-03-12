import { container } from 'tsyringe'
import { CategoriesRepository } from '../../infra/mongodb/CategoriesRepository'
import { ICategoriesRepository } from '../ICategoriesRepository'

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)