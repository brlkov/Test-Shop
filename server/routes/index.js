const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const coinRouter = require('./coinRouter')
const countryRouter = require('./countryRouter')


router.use('/user', userRouter)
router.use('/coin', coinRouter)
router.use('/country', countryRouter)


module.exports = router