import {$host, $authHost} from "./index";

export const createCountry = async (country) => {
    const {data} = await $authHost.post('api/country', country)
    return data
}

export const fetchCountries = async () => {
    const {data} = await $host.get('api/country')
    return data
}

export const createCoin = async (coin) => {
    const {data} = await $authHost.post('api/coin', coin)
    return data
}

export const fetchCoins = async (countryId, page, limit) => {
    const {data} = await $host.get('api/coin', {params: {countryId, page, limit}})
    return data
}

export const fetchOneCoin = async (id) => {
    const {data} = await $host.get('api/coin/' + id)
    return data
}
