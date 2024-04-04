import React, { useEffect } from 'react';

export default function InputTexts (
    { errorSourceText, sourceText, handleTextChange, handleKeyPress, handleTranslateClick }: { errorSourceText: any, sourceText: any, handleTextChange: any, handleKeyPress: any, handleTranslateClick: any }
  ) {

    useEffect(() => {
        console.log('changed');
    }, [sourceText])

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
          <div className="flex justify-between mx-3 my-3">
            <div className="order-first"></div>
            <div className="order-last">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleTranslateClick}
              >
                Translate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }