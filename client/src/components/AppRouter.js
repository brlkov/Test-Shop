import React, {useContext} from 'react';
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import {Routes, Route, Navigate} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {user.isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
    );
});

export default AppRouter;