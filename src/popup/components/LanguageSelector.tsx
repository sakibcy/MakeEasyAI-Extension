import React from "react";
import SelectItem from "./SelectItem";

export default function LanguageSelector({ theme }: { theme: string }) {
    return (
        <div className="">
            <div className="flex pt-1 px-2">
                <div className="grow h-14">
                    <SelectItem />
                </div>

                <div className="grow-0 h-14 py-2.5 px-2">
                    <button
                        type="button"
                        className="inline-block rounded border border-current px-2 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                    >
                        <ArrowSVG theme={theme} />
                    </button>
                </div>

                <div className="grow h-14">
                    <SelectItem />
                </div>
            </div>
        </div>
    );
}

const ArrowSVG = ({ theme }: { theme: string }) => {
    
    return (
        <svg
        className="w-4 h-4"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5858 7L16.2929 9.29289C15.9024 9.68342 15.9024 10.3166 16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071L21.7071 6.70711C22.0976 6.31658 22.0976 5.68342 21.7071 5.29289L17.7071 1.29289C17.3166 0.902369 16.6834 0.902369 16.2929 1.29289C15.9024 1.68342 15.9024 2.31658 16.2929 2.70711L18.5858 5H7C5.67392 5 4.40215 5.52678 3.46447 6.46447C2.52678 7.40215 2 8.67392 2 10V11C2 11.5523 2.44772 12 3 12C3.55228 12 4 11.5523 4 11V10C4 9.20435 4.31607 8.44129 4.87868 7.87868C5.44129 7.31607 6.20435 7 7 7H18.5858Z" fill={theme == 'dark' ? '#fff' : '#000'}></path> <path d="M7.70711 14.7071C8.09763 14.3166 8.09763 13.6834 7.70711 13.2929C7.31658 12.9024 6.68342 12.9024 6.29289 13.2929L2.29289 17.2929C1.90237 17.6834 1.90237 18.3166 2.29289 18.7071L6.29289 22.7071C6.68342 23.0976 7.31658 23.0976 7.70711 22.7071C8.09763 22.3166 8.09763 21.6834 7.70711 21.2929L5.41421 19H17C18.3261 19 19.5979 18.4732 20.5355 17.5355C21.4732 16.5979 22 15.3261 22 14V13C22 12.4477 21.5523 12 21 12C20.4477 12 20 12.4477 20 13V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H5.41421L7.70711 14.7071Z" fill={theme == 'dark' ? '#fff' : '#000'}></path> </g></svg>
    )
}