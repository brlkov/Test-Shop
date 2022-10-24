import React, {useContext, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Context} from "./index";
import {check} from "./http/userAPI";
import "./styles/App.css"

const App = () => {
    const {user} = useContext(Context)

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        })
    }, )

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
