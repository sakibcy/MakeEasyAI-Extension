import axios from "axios";
import {urlOfBackEnd} from "./config";

export const callsummarizerGoogleAI = async (text: string) => {
    const res = await axios.post(`${urlOfBackEnd}/api/summarizer`, {
        text
    })
    console.log(res.data)
    return res.data.candidates[0].content.parts[0].text;
}

// callsummarizerGoogleAI("Daniel Radcliffe, now 18, gains access to his £20 million fortune from the Harry Potter films. Despite his newfound wealth, Radcliffe remains grounded, stating he has no plans for extravagant spending. He emphasizes his enjoyment of simple purchases and his determination to avoid the pitfalls of child stardom. Radcliffe's upcoming projects include a TV movie and an Australian film, while he anticipates increased media attention as he enters adulthood.")