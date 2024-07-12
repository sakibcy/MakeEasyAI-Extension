import axios from "axios";
import { apiVerison, urlOfBackEnd } from "./config";
import apiClient from "./apiClient";

export const getLanguagesV2 = async () => {
    const res = await apiClient.get(`${urlOfBackEnd}/${apiVerison}/languages`);
    return res.data;
}