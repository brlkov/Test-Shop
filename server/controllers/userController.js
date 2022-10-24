const apiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const {User, Basket} = require('../models/models')


const generateJwt = (id, email, role) => {
    return jsonwebtoken.sign({id, email, role}, process.env.SKEY, {expiresIn: '24h'})
}


class userController {

    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(apiError.badRequest("Uncorrected e-mail or password"))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(apiError.badRequest("This e-mail are not available"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const jwt = generateJwt(user.id, user.email, user.role)
        return res.json({jwt})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(apiError.internal("User is not find"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(apiError.internal("Uncorrected password"))
        }
        const jwt = generateJwt(user.id, user.email, user.role)
        return res.json({jwt})
    }

    async check(req, res, next) {
        const jwt = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({jwt})
    }

}

module.exports = new userController()
