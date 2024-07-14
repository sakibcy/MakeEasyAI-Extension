import axios from "axios";
import { urlOfBackEnd } from "./config";
import getCookie from "../utils/getCookie";

export default axios.create({
    baseURL: `${urlOfBackEnd}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + await getCookie()
    },
})