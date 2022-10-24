import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const CountryBar = observer( () => {
    const {coin} = useContext(Context)
    return (
        <div className="CountryBar">
            {coin.countries.map(country =>
                <button
                    className={country === coin.selectedCountry ? "ActiveBtn" : "Btn"}
                    onClick={() => coin.setSelectedCountry(country)}
                    key={country.id}
                >
                {country.name}
                </button>
            )}
        </div>
    );
});

export default CountryBar;