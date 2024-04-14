import {atom} from "recoil";

export const translateLoader = atom({
    key: 'TranslateLoader',
    default: false,
});

export const summarizerLoader = atom({
    key: 'SummarizerLoader',
    default: false,
});