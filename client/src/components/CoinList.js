import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CoinItem from "./CoinItem";

const CoinList = observer(() => {
    const {coin} = useContext(Context)

    return (
        <div className="CoinList">
            {coin.coins.map(coin =>
                <CoinItem key={coin.id} coin={coin}/>
            )}
        </div>
    );
});

export default CoinList;