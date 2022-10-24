import {makeAutoObservable} from "mobx";

export default class CoinStore {
    constructor() {
        this._countries = []
        this._coins = []
        this._selectedCountry = {}
        this._page = 1
        this._coinsCount = 0
        makeAutoObservable(this)
    }

    setCountries(countries) {
        this._countries = countries
    }

    setCoins(coins) {
        this._coins = coins
    }

    setSelectedCountry(country) {
        this._selectedCountry = country
    }

    setPage(page) {
        this._page = page
    }

    setCoinsCount(count) {
        this._coinsCount = count
    }

    get countries() {
        return this._countries
    }

    get selectedCountry() {
        return this._selectedCountry
    }

    get coins() {
        return this._coins
    }

    get coinsCount() {
        return this._coinsCount
    }

    get page() {
        return this._page
    }

}
