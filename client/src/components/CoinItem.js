import React from 'react';
import {useNavigate} from "react-router-dom";
import {COIN_ROUTE} from "../utils/consts";

const CoinItem = ({coin}) => {
    const navigate = useNavigate()

    return (
        <div className="CoinItem">
            <div className="CoinCard" onClick={() => navigate(COIN_ROUTE + '/' + coin.id)}>
                <img width={150} height={150} src={process.env.REACT_APP_API_URL + coin.img} alt=""/>
                <div>{coin.name}</div>
                <div>Price: {coin.price} ₽</div>
            </div>
        </div>
    );
};

export default CoinItem;