import Router from 'express'
import products_routes from '../../../../modules/products/infra/http/routes'
import categories_routes from '../../../../modules/categories/infra/http/routes'

const router = Router()

router.use('/products', products_routes)
router.use('/categories', categories_routes)

export { router }