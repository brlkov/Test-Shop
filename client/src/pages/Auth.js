import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {Button} from "react-bootstrap";

const Auth = observer(() => {
    const navigate = useNavigate()

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const {user} = useContext(Context)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        try {
            let userData
            if (isLogin) {
                const {data} = await axios.post('http://185.20.225.161:3000/api/user/login', {email, password})
                localStorage.setItem('jwt', data.jwt)
                userData = jwt_decode(data.jwt)
                console.log(userData)
            } else {
                const {data} = await axios.post('http://185.20.225.161:3000/api/user/registration', {email, password, role: 'USER'})
                localStorage.setItem('jwt', data.jwt)
                userData = jwt_decode(data.jwt)
                console.log(userData)
            }
            user.setUser(userData)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn();
    }


    return (
        <div className="Auth">
            <div className="AuthCard">
                <h2>{isLogin ? "Login" : "Registration"}</h2>
                <form className="AuthForm" onSubmit={handleSubmit}>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className=""
                        placeholder="E-mail"
                    />
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className=""
                        placeholder="Password"
                        type="password"
                    />
                    <div className="AuthRow">
                        {isLogin ?
                            <Link to={REGISTRATION_ROUTE}>Registration</Link>
                            :
                            <Link to={LOGIN_ROUTE}>Sign in</Link>
                        }
                        <Button type="submit" className="BootstrapBtn" onClick={signIn}>{isLogin ? "Enter" : "Sign up"}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default Auth;
