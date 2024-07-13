import { apiVerison } from "./config";
import apiClient from "./apiClient";

export const getLanguagesV2 = async () => {
    const res = await apiClient.get(`/${apiVerison}/languagesv2`);
    return res.data;
}