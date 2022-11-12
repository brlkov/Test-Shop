import axios from "axios";

const $host = axios.create({
    baseURL: 'http://185.20.225.161:3000/'
})

const $authHost = axios.create({
    baseURL: 'http://185.20.225.161:3000/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
