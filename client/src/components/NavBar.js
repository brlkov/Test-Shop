import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE} from "../utils/consts";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('jwt', "")
    }

    return (
        <div className="NavBar">
            <div className="NavBarTop">
                <button className="Btn" onClick={() => navigate(SHOP_ROUTE)}>Coin Market</button>
                {user.isAdmin ?
                    <div className="Nav">
                        <div>{user.user.email}</div>
                        <button className="Btn" onClick={() => navigate(ADMIN_ROUTE)}>Admin</button>
                        <button className="Btn" onClick={() => logOut()}>Logout</button>
                    </div>
                    : user.isAuth ?
                        <div className="Nav">
                            <div>{user.user.email}</div>
                            <button className="Btn" onClick={() => logOut()}>Logout</button>
                        </div>
                        :
                        <div className="Nav">
                            <button className="Btn" onClick={() => navigate(LOGIN_ROUTE)}>
                                Login
                            </button>
                        </div>
                }
            </div>
            <div className="NavBarBottom">
                <div>Welcome to my test shop!</div>
            </div>
        </div>
    );
});

export default NavBar;