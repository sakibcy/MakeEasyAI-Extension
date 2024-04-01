import axios from "axios";

export async function getLanguages() {
    try {
        const res = await axios.get('https://translation.googleapis.com/language/translate/v2/languages');
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
}