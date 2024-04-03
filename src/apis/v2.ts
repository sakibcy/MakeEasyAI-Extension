import axios from "axios";
import { urlOfBackEnd } from "./config";

export const getLanguagesV2 = async () => {
    const res = await axios.get(`${urlOfBackEnd}/api/v2/languages`);
    return res.data;
}