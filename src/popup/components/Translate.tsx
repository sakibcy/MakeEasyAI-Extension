import React from 'react';
import { useState, useEffect } from 'react';
import { callTranslateText_V3 } from '../../apis/v3';
import ShowResult from './ShowResult';
import SelectLanguages from './SelectLanguages';
import { useDaylightTheme } from '../../hooks/useDaylightTheme';
import { useChromeStorageSync } from 'use-chrome-storage';
import getDefaultLanguages from '../../apis/getDefaultLanguages';
import { getLanguagesV2 } from '../../apis/v2';
import InputTexts from './InputTexts';

export default function Translate() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const [isPersistentSourceText, setIsPersistentSourceText] = useState(false);
  const [errorSourceText, setErrorSourceText] = useState('');
  const [isInitialStateResolvedSourceText, setIsInitialStateResolvedSourceText] = useState(false);

  // Select Languages
  const { theme, toggleTheme } = useDaylightTheme();

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

  const [sourceLanguage, setSourceLanguage, isPersistentSource, errorSource, isInitialStateResolvedSource] = useChromeStorageSync('sourceLanguage', languages[17]);

  const [targetLanguage, setTargetLanguage, isPersistentTarget, errorTarget, isInitialStateResolvedTarget] = useChromeStorageSync('totranslatedlang', languages[134]);

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
    const res = await callTranslateText_V3(sourceText, targetLanguage.code);
    if (res) {
      setSourceLanguage(() => {
        const result: any = languages.filter(language => language.code == res[0].translations[0].detectedLanguageCode)
        
        return result[0];
      })
      
      setTranslatedText(res[0].translations[0].translatedText)
      const translatedTextStorage = res[0].translations[0].translatedText;
      await chrome.storage.sync.set({ translatedTextStorage })

      // console.log(res[0].translations[0].translatedText);
      // console.log(translatedText);
    }

    // Optionally, save the modified text back to storage
    if (isPersistentSourceText) {
      await chrome.storage.sync.set({ sourceText });
    }
  };

  const changeSourceTextAndTranslatedTextBasedOnArrowClick = async () => {
    let temp = translatedText;

    setTranslatedText(sourceText)
    // const translatedTextStorage = sourceText;
    await chrome.storage.sync.set({ translatedTextStorage: sourceText })

    // const val = await chrome.storage.sync.get('translatedTextStorage');
    // const res = val.translatedTextStorage
    setSourceText(temp)
    await chrome.storage.sync.set({ sourceText: translatedText });
  }

  // Handle keyboard press in textarea
  const handleKeyPress = (event: { ctrlKey: any; key: string; }) => {
    if (event.ctrlKey && event.key === 'Enter') {
      handleTranslateClick(event); // Simulate button click on Ctrl+Enter
    }
  };

  return (
    <div>
      {/* <SelectLanguages theme={theme} languages={languages} setSourceLanguage={setSourceLanguage} setTargetLanguage={setTargetLanguage} sourceLanguage={sourceLanguage} targetLanguage={targetLanguage}
      setSourceText={setSourceText} setTranslatedText={setTranslatedText} sourceText={sourceText} translatedText={translatedText}
      /> */}
      <SelectLanguages theme={theme} languages={languages} setSourceLanguage={setSourceLanguage} setTargetLanguage={setTargetLanguage} sourceLanguage={sourceLanguage} targetLanguage={targetLanguage}
      changeSourceTextAndTranslatedTextBasedOnArrowClick={changeSourceTextAndTranslatedTextBasedOnArrowClick}
      />

      <InputTexts errorSourceText={errorSourceText} handleKeyPress={handleKeyPress} handleTextChange={handleTextChange} handleTranslateClick={handleTranslateClick} sourceText={sourceText}/>

      <ShowResult translatedText={translatedText} />
    </div>
  );
}

// const InputText = (
//   { errorSourceText, sourceText, handleTextChange, handleKeyPress, handleTranslateClick }: { errorSourceText: any, sourceText: any, handleTextChange: any, handleKeyPress: any, handleTranslateClick: any }
// ) => {
//   return (
//     <div className="mx-3">
//       {errorSourceText && <div className="text-red-500">{errorSourceText}</div>}
//       <form action="">
//         <textarea
//           rows={4}
//           name="comment"
//           id="comment"
//           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4 dark:bg-gray-200 text-sm"
//           defaultValue={sourceText}
//           onChange={handleTextChange}
//           onKeyDown={handleKeyPress} // Add event listener for key press
//         />
//         <div className="flex justify-between mx-3 my-3">
//           <div className="order-first"></div>
//           <div className="order-last">
//             <button
//               type="submit"
//               className="inline-flex items-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               onClick={handleTranslateClick}
//             >
//               Translate
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }