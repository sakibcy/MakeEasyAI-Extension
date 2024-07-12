import axios from "axios";
import { urlOfBackEnd } from "./config";
import Cookies from "js-cookie";

const token = Cookies.get("x-auth-token");

export default axios.create({
    baseURL: `${urlOfBackEnd}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    },
})