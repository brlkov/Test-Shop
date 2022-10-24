const jsonwebtoken = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const jwt = req.headers.authorization.split(' ')[1]
        if (!jwt) {
             return res.status(401).json({message: "User was not authorised"})
        }
        const decoded = jsonwebtoken.verify(jwt, process.env.SKEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "User was not authorised"})
    }
}
