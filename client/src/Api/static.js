import axios from "axios";

export const Auth = axios.create({
    baseURL:'http://localhost:4000',
    withCredentials : true
})