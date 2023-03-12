import Router from 'express'
import CategoriesController from '../controllers/CategoriesController'

const categories_routes = Router()

categories_routes.get('/', CategoriesController.findCategories)
categories_routes.post('/', CategoriesController.createCategory)
categories_routes.put('/:id_category', CategoriesController.updateCategory)
categories_routes.delete('/:id_category', CategoriesController.deleteCategories)

export default categories_routes