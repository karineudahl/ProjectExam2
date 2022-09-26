import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { API_base } from "../../constants/Api";

export default function useAxios() {
    const [auth] = useContext(AuthContext); 

    const apiClient = axios.create({
        baseURL: API_base,
    }); 

    apiClient.interceptors.request.use(function (config) {
        const token = auth.token; 
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config; 
    }); 

    return apiClient; 
} 