import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Coin from "./pages/Coin";
import {ADMIN_ROUTE, BASKET_ROUTE, COIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";


export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: COIN_ROUTE + '/:id',
        Component: <Coin/>
    }
]
