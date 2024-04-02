import axios from "axios";

export const getLanguagesV2 = async () => {
    const res = await axios.get(`http://localhost:3001/api/v2/languages`);
    return res.data;
}