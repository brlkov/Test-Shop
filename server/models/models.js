const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketCoin = sequelize.define('basket_coin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Coin = sequelize.define('coin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Country = sequelize.define('country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketCoin)
BasketCoin.belongsTo(Basket)

Country.hasMany(Coin)
Coin.belongsTo(Country)

Coin.hasMany(BasketCoin)
BasketCoin.belongsTo(Coin)

module.exports = {
    User,
    Basket,
    BasketCoin,
    Coin,
    Country
}
