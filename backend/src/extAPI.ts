import { Translate } from '@google-cloud/translate/build/src/v2';
import dotenv from 'dotenv'
dotenv.config();

// Your credentials
const CREDENTIALS: {[key: string]: any} = require('./nth-aggregator-419009-52d26a665e15.json');

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

export const detectLanguage = async (text: string) => {
    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

// detectLanguage('Oggi è lunedì')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

export const translateText = async (text: any, targetLanguage: any) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

// translateText('Oggi è lunedì', 'en')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

export const getLanguages = async () => {
    const res = await translate.getLanguages();
    return res;
}

// getLanguages()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });
