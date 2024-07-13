import React from 'react';
import {useState, useEffect} from 'react';
import {callTranslateText_V3} from '../../apis/v3';
import ShowResult from './ShowResult';
import SelectLanguages from './SelectLanguages';
import {useDaylightTheme} from '../../hooks/useDaylightTheme';
import {useChromeStorageSync} from 'use-chrome-storage';
import getDefaultLanguages from '../../apis/getDefaultLanguages';
import {getLanguagesV2} from '../../apis/v2';
import InputTexts from './InputTexts';
import {Upgrade} from "./Navbar";
import {useRecoilState} from "recoil";
import {translateLoader} from "../../state/atoms";

export default function Translate() {
    const [sourceText, setSourceText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const [isPersistentSourceText, setIsPersistentSourceText] = useState(false);
    const [errorSourceText, setErrorSourceText] = useState('');
    const [isInitialStateResolvedSourceText, setIsInitialStateResolvedSourceText] = useState(false);

    const [loader, setLoader] = useRecoilState(translateLoader);


    // Select Languages
    const {theme, toggleTheme} = useDaylightTheme();

    let languages = getDefaultLanguages();

    try {
        getLanguagesV2()
            .then(res => {
                languages = res;

            })
            .catch(err => {
                console.log(err);
            })
    } catch (error) {
        console.log(error);

    }

    const [sourceLanguage, setSourceLanguage, isPersistentSource, errorSource, isInitialStateResolvedSource] = useChromeStorageSync('sourceLanguage', languages[27]);

    const [targetLanguage, setTargetLanguage, isPersistentTarget, errorTarget, isInitialStateResolvedTarget] = useChromeStorageSync('totranslatedlang', languages[55]);

    // Fetch sourceText from Chrome storage on initial render
    useEffect(() => {
        const fetchSourceText = async () => {
            try {
                const storedText = await chrome.storage.sync.get('sourceText');
                setSourceText(storedText.sourceText || '');
                setIsInitialStateResolvedSourceText(true);


                const val = await chrome.storage.sync.get('translatedTextStorage');
                const res = val.translatedTextStorage
                setTranslatedText(res)

            } catch (error) {
                console.error('Error fetching sourceText from storage:', error);
                setErrorSourceText('Error retrieving saved text');
            }
        };

        fetchSourceText();
    }, []);

    // Handle text change in textarea
    const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSourceText(event.target.value);
        setIsPersistentSourceText(true); // Flag to indicate user modification
    };

    // Handle Translate button click (replace with your translation logic)
    const handleTranslateClick = async (event: { ctrlKey?: any; key?: string; preventDefault?: any; }) => {
        event.preventDefault(); // Prevent default form submission

        if (!sourceText) {
            setErrorSourceText('Please enter text to translate');
            return;
        }

        // Replace with your translation logic using the sourceText
        setLoader(true)
        const res = await callTranslateText_V3(sourceText, targetLanguage.code);

        if (res) {
            setLoader(false)
            setSourceLanguage(() => {
                const result: any = languages.filter(language => language.code == res[0].translations[0].detectedLanguageCode)
                return result[0];
            })

            setTranslatedText(res[0].translations[0].translatedText)
            const translatedTextStorage = res[0].translations[0].translatedText;
            await chrome.storage.sync.set({translatedTextStorage})

            // console.log(res[0].translations[0].translatedText);
            // console.log(translatedText);
        }

        // Optionally, save the modified text back to storage
        if (isPersistentSourceText) {
            await chrome.storage.sync.set({sourceText});
        }
    };

    const changeSourceTextAndTranslatedTextBasedOnArrowClick = async () => {
        let temp = translatedText;

        setTranslatedText(sourceText)
        
        await chrome.storage.sync.set({translatedTextStorage: sourceText})

        setSourceText(temp)
        await chrome.storage.sync.set({sourceText: translatedText});
    }

    // Handle keyboard press in textarea
    const handleKeyPress = (event: { ctrlKey: any; key: string; }) => {
        if (event.ctrlKey && event.key === 'Enter') {
            handleTranslateClick(event); // Simulate button click on Ctrl+Enter
        }
    };

    return (
        <div className="sm:mx-auto sm:my-auto sm:w-full sm:max-w-md">
            {/* <SelectLanguages theme={theme} languages={languages} setSourceLanguage={setSourceLanguage} setTargetLanguage={setTargetLanguage} sourceLanguage={sourceLanguage} targetLanguage={targetLanguage}
      setSourceText={setSourceText} setTranslatedText={setTranslatedText} sourceText={sourceText} translatedText={translatedText}
      /> */}
            <SelectLanguages theme={theme} languages={languages} setSourceLanguage={setSourceLanguage}
                             setTargetLanguage={setTargetLanguage} sourceLanguage={sourceLanguage}
                             targetLanguage={targetLanguage}
                             changeSourceTextAndTranslatedTextBasedOnArrowClick={changeSourceTextAndTranslatedTextBasedOnArrowClick}
            />

            <InputTexts errorSourceText={errorSourceText} handleKeyPress={handleKeyPress}
                        handleTextChange={handleTextChange} handleTranslateClick={handleTranslateClick}
                        sourceText={sourceText}/>

            <ShowResult translatedText={translatedText}/>
        </div>
    );
}