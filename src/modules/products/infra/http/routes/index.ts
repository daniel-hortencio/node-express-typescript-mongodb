import Router from 'express'
import ProductsController from '../controllers/ProductsController'

const products_routes = Router()

products_routes.get('/', ProductsController.findProducts)
products_routes.post('/', ProductsController.createProduct)
products_routes.delete('/:id_product', ProductsController.deleteProduct)
products_routes.put('/:id_product', ProductsController.updateProduct)

export default products_routes