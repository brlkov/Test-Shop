const Router = require('express')
const router = new Router()
const coinController = require('../controllers/coinController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), coinController.create)
router.get('/', coinController.getAll)
router.get('/:id', coinController.getOne)

module.exports = router
