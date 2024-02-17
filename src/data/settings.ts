import ECookieValues from "../domain/common/enum";
import Cookies from "js-cookie"
import axios from "axios";


const API_HTTPS_SERVICES = axios.create({
    baseURL: 'http://5.35.93.223:7000',
    withCredentials: false,
})

API_HTTPS_SERVICES.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${Cookies.get(
            ECookieValues.ACCESS_TOKEN
        )}`
        config.headers['Content-Type'] = 'application/json'

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
export default API_HTTPS_SERVICES
