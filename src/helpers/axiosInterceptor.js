import axios from "axios";
import { AsyncStorage } from "react-native";
import envs from "../config/env"



let headers = {};

const axiosInstance = axios.create({
    baseURL: 'https://truly-contacts.herokuapp.com/api',  //envs.BACKEND_URL,  https://truly-contacts.herokuapp.com/api
    headers,
});


axiosInstance.interceptors.request.use(
   async (config) =>{

        const token = await AsyncStorage.getItem("token")
        if (token){
            config.headers.Authorization = `Bearer ${token}`; //Bearer
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;