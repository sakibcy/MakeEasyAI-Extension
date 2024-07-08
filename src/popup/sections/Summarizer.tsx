import React from 'react';
import {useState, useEffect} from 'react';
import {callTranslateText_V3} from '../../apis/v3';
import {useDaylightTheme} from '../../hooks/useDaylightTheme';
import {useChromeStorageSync} from 'use-chrome-storage';
import getDefaultLanguages from '../../apis/getDefaultLanguages';
import {getLanguagesV2} from '../../apis/v2';
import Navbar, {Upgrade} from "../components/Navbar";
import {useRecoilState} from "recoil";
import {summarizerLoader, translateLoader} from "../../state/atoms";
import ShowResultSummarizer from "../components/ShowResultSummarizer";
import {callsummarizerGoogleAI} from "../../apis/summarizerGoogleAI";

export default function Summarizer() {
    const [sourceTextForSummarize, setSourceTextForSummarize] = useState('');
    const [summarizedText, setSummarizedText] = useState('');

    const [isPersistentSourceText, setIsPersistentSourceText] = useState(false);
    const [errorSourceText, setErrorSourceText] = useState('');
    const [isInitialStateResolvedSourceText, setIsInitialStateResolvedSourceText] = useState(false);

    const [loader, setLoader] = useRecoilState(summarizerLoader);


    // Select Languages
    const {theme, toggleTheme} = useDaylightTheme();

    let languages = getDefaultLanguages();

    const [sourceLanguage, setSourceLanguage, isPersistentSource, errorSource, isInitialStateResolvedSource] = useChromeStorageSync('sourceLanguage', languages[27]);

    const [targetLanguage, setTargetLanguage, isPersistentTarget, errorTarget, isInitialStateResolvedTarget] = useChromeStorageSync('totranslatedlang', languages[55]);

    // Fetch sourceText from Chrome storage on initial render
    useEffect(() => {
        const fetchSourceText = async () => {
            try {
                const storedText = await chrome.storage.sync.get('sourceTextForSummarize');
                setSourceTextForSummarize(storedText.sourceTextForSummarize || '');
                setIsInitialStateResolvedSourceText(true);


                const val = await chrome.storage.sync.get('summarizedTextStorage');
                const res = val.summarizedTextStorage
                setSummarizedText(res)

            } catch (error) {
                console.error('Error fetching sourceText from storage:', error);
                setErrorSourceText('Error retrieving saved text');
            }
        };

        fetchSourceText();
    }, []);

    // Handle text change in textarea
    const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSourceTextForSummarize(event.target.value);
        setIsPersistentSourceText(true); // Flag to indicate user modification
    };

    // Handle Translate button click (replace with your translation logic)
    const handleSummarizeClick = async (event: { ctrlKey?: any; key?: string; preventDefault?: any; }) => {
        event.preventDefault(); // Prevent default form submission

        if (!sourceTextForSummarize) {
            setErrorSourceText('Please enter text to translate');
            return;
        }

        // Replace with your translation logic using the sourceText
        setLoader(true)
        const res = await callsummarizerGoogleAI(sourceTextForSummarize)

        if (res) {
            setLoader(false)

            setSummarizedText(res)
            const summarizedTextStorage = res;
            await chrome.storage.sync.set({summarizedTextStorage})
        }

        // Optionally, save the modified text back to storage
        if (isPersistentSourceText) {
            await chrome.storage.sync.set({sourceTextForSummarize});
        }
    };

    const changeSourceTextAndTranslatedTextBasedOnArrowClick = async () => {
        let temp = summarizedText;

        setSummarizedText(sourceTextForSummarize)
        // const translatedTextStorage = sourceText;
        await chrome.storage.sync.set({sourceTextForSummarize})

        // const val = await chrome.storage.sync.get('translatedTextStorage');
        // const res = val.translatedTextStorage
        setSourceTextForSummarize(temp)
        await chrome.storage.sync.set({summarizedText});
    }

    // Handle keyboard press in textarea
    const handleKeyPress = (event: { ctrlKey: any; key: string; }) => {
        if (event.ctrlKey && event.key === 'Enter') {
            handleSummarizeClick(event); // Simulate button click on Ctrl+Enter
        }
    };

    // @ts-ignore
    return (
        <div className="sm:mx-auto sm:my-auto sm:w-full sm:max-w-md">
            <div className={'pt-5'}>
                <InputTextsSummarizer errorSourceText={errorSourceText} handleKeyPress={handleKeyPress}
                                        handleTextChange={handleTextChange} handleTranslateClick={handleSummarizeClick}
                                        sourceText={sourceTextForSummarize}/>

                <ShowResultSummarizer summarizedText={summarizedText}/>
                <div className="flex justify-center">
                    <Upgrade/>
                </div>
            </div>
        </div>
    );
}


function InputTextsSummarizer (
    { errorSourceText, sourceText, handleTextChange, handleKeyPress, handleTranslateClick }: { errorSourceText: any, sourceText: any, handleTextChange: any, handleKeyPress: any, handleTranslateClick: any }
) {
    return (
        <div className="mx-3">
            {errorSourceText && <div className="text-red-500">{errorSourceText}</div>}
            <form action="">
          <textarea
              rows={6}
              name="inputTextBox"
              id="inputTextBox"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4 dark:bg-gray-200 text-sm"
              value={sourceText}
              onChange={handleTextChange}
              onKeyDown={handleKeyPress} // Add event listener for key press
          />
                <div className="flex justify-between mx-3 my-2">
                    {/*<div className="order-first"></div>*/}
                    <div className="order-first">
                        <button
                            type="submit"
                            className="inline-flex items-center rounded-md bg-blue-500 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleTranslateClick}
                        >
                            Summarize
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}