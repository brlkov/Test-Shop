import React, {useContext, useEffect} from 'react';
import CountryBar from "../components/CountryBar";
import CoinList from "../components/CoinList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCoins, fetchCountries} from "../http/coinAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {

    const {coin} = useContext(Context)

    useEffect(() => {
        fetchCountries().then(data => coin.setCountries(data))
        fetchCoins(undefined, 1,9).then(data => {
            coin.setCoins(data.rows)
            coin.setCoinsCount(data.count)
            })
    } , [])

    useEffect(() => {
        fetchCoins(coin.selectedCountry.id, coin.page,9).then(data => {
            coin.setCoins(data.rows)
            coin.setCoinsCount(data.count)
        })
    }, [coin.page, coin.selectedCountry])

    return (
        <div className="Shop">
            <CountryBar/>
            <CoinList/>
            <Pages/>
        </div>
    );
});

export default Shop;