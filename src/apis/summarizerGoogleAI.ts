import apiClient from "./apiClient";
import { apiVerison } from "./config";

export const callsummarizerGoogleAI = async (text: string) => {
    const res = await apiClient.post(`/${apiVerison}/summarizer`, {
        text
    }); 
    return res.data.candidates[0].content.parts[0].text;
}