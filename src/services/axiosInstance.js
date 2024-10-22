import Axios from 'axios';
import { DOMAIN_CYBERBUG, TOKEN } from "../utils/settingSystem.js";

const axiosInstance = Axios.create({
    baseURL: DOMAIN_CYBERBUG,
    timeout: 10000, 
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(TOKEN);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;