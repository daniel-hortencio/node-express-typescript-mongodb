import { container } from 'tsyringe'
import { ProductsRepository } from '../../infra/mongodb/ProductsRepository'
import { IProductsRepository } from '../IProductsRepository'

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
)