import axios from "axios";
import { urlOfBackEnd } from "./config";

export const getCookie = async () => {
    const cookie = await chrome.cookies.get(
        {
            url: 'http://localhost:3001',
            name: 'x-auth-token'
        })
    
    return cookie?.value;
}

export default axios.create({
    baseURL: `${urlOfBackEnd}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + await getCookie()
    },
})