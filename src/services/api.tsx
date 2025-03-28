import axios from "axios";

export const API_BASE_URL = "http://10.0.2.2:8080"; //localhost no emulador android
//export const API_BASE_URL = "http://192.168.1.103:8080"; //meu ip

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
