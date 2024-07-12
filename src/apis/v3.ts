import { apiVerison } from "./config";
import apiClient from "./apiClient";

export const getLanguages_V3 = async () => {
    const res = await apiClient.get(`/${apiVerison}/languages`);
    return res.data;
}

export const callTranslateText_V3 = async (content: string, targetLanguageCode: string) => {
    const res = await apiClient.post(`/${apiVerison}/translate_text`, {
        contents: [content],
        targetLanguageCode
    });
    return res.data;
}