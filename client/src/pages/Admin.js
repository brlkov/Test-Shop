import React, {useState} from 'react';
import CreateCoin from "../components/modals/CreateCoin";
import CreateCountry from "../components/modals/CreateCountry";

const Admin = () => {
    const [createCoinVisible, setCreateCoinVisible] = useState(false)
    const [createCountryVisible, setCreateCountryVisible] = useState(false)

    return (
        <div className="AdminPanel">
            <button className="Btn Btn_FixedSize" onClick={() => setCreateCoinVisible(true)}>Add coin</button>
            <button className="Btn Btn_FixedSize" onClick={() => setCreateCountryVisible(true)}>Add country</button>

            <CreateCoin show={createCoinVisible} hide={() => setCreateCoinVisible(false)}/>
            <CreateCountry show={createCountryVisible} hide={() => setCreateCountryVisible(false)}/>
        </div>
    );
};

export default Admin;