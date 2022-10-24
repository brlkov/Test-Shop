const uuid = require('uuid')
const path = require('path')
const {Coin} = require('../models/models')
const apiError = require('../error/apiError')

class coinController {

    async create(req, res, next) {
        try {
            const {name, price, description, countryId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const coin = await Coin.create({name, price, description, countryId, img: fileName})
            return res.json(coin)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {countryId, page, limit} = req.body
        const pg = page || 1
        const lim = limit || 15
        let offset = pg * lim - lim
        let coins
        if (!countryId) {
            coins = await Coin.findAndCountAll({limit: lim, offset: offset})
        }
        if (countryId) {
            coins = await Coin.findAndCountAll({where: {countryId}, limit: lim, offset: offset})
        }
        return res.json(coins)
    }

    async getOne(req, res) {
        const {id} = req.params
        const coin = await Coin.findOne({where: {id}})
        return res.json(coin)
    }

}

module.exports = new coinController()
