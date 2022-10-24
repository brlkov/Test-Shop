import {$authHost} from "./index";
import jwt_decode from "jwt-decode"

// export const registration = (email, password) => {
//     const {data} = $host.post('api/user/registration', {email, password, role: 'ADMIN'})
//     return jwt_decode(data.jwt)
// }

// export const login = (email, password) => {
//     const {data} = $host.post('api/user/login', {email, password})
//     return jwt_decode(data.jwt)
// }

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('jwt', data.jwt)
    return jwt_decode(data.jwt)
}
