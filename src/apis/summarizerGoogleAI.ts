import apiClient from "./apiClient";

export const callsummarizerGoogleAI = async (text: string) => {
    const res = await apiClient.post(`/summarizer`, {
        text
    });
    return res.data.candidates[0].content.parts[0].text;
}