const {Country} = require('../models/models')
const apiError = require('../error/apiError')

class countryController {

    async create(req, res) {
        const {name} = req.body
        const country = await Country.create({name})
        return res.json(country)
    }

    async getAll(req, res) {
        const countries = await Country.findAll()
        return res.json(countries)
    }

}

module.exports = new countryController()
