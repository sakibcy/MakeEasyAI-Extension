import axios from "axios";

export const getLanguages = async () => {
    const res = await axios.get(`http://localhost:3001/languages`);
    
    return res.data;
}