import React, {useEffect, useRef, useState} from 'react'
import {useRecoilState, useRecoilValue} from "recoil";
import {summarizerLoader, translateLoader} from "../../state/atoms";

export default function ShowResultSummarizer({summarizedText}: { summarizedText: string }) {
    const [loading, setLoadingData] = useState(false);
    const [text, setText] = useState('nothing');

    const loader = useRecoilValue(summarizerLoader);

    return (
        <div className="relative items-center p-3">
            {
                <Card text={summarizedText}/>
            }

            {loader && <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-500 fill-blue-600"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>}
        </div>
    )
}

const Card: React.FC<{ text: string }> = ({text}) => {
    const [isCopied, setIsCopied] = useState(false);
    const loader = useRecoilValue(summarizerLoader);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    return (
        <div>
            {loader ? <textarea
                rows={9}
                name="comment"
                id="comment"
                className="opacity-50 block w-full rounded-md border-0 py-1 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4 dark:bg-gray-200 text-sm"
                value={text}
            /> : <textarea
                rows={9}
                name="comment"
                id="comment"
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4 dark:bg-gray-200 text-sm"
                value={text}
            />}
            <div className="bg-slate-100 rounded-lg shadow-md ">
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleCopyClick}
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};