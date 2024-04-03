import axios from "axios";
import { urlOfBackEnd } from "./config";

export const getLanguages_V3 = async () => {
    const res = await axios.get(`${urlOfBackEnd}/api/v3/languages`);
    return res.data;
}

export const callTranslateText_V3 = async (content: string, targetLanguageCode: string) => {
    const res = await axios.post(`${urlOfBackEnd}/api/v3/translate_text`, {
        contents: [content],
        targetLanguageCode
    });
    return res.data;
}