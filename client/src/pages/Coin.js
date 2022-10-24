import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneCoin} from "../http/coinAPI";

const Coin = () => {
    const [coin, setCoin] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchOneCoin(id).then(data => setCoin(data))
    }, )

    return (
        <div className="CoinId">
            <div className="CoinIdCard">
                <img width={300} height={300} src={process.env.REACT_APP_API_URL + coin.img} alt=""/>
                <div>
                    <div>{coin.name}</div>
                    <div>Price: {coin.price} ₽</div>
                    <div>{coin.description}</div>
                </div>
            </div>
        </div>
    );
};

export default Coin;