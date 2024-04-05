import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {CheckCircleIcon} from "@heroicons/react/20/solid";

export default function Navbar ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: any;
}) {

  let login: boolean;
  login = false;

  return (
    <div className="navbar">
        <div className="navbar-start">
            {/*<DayLightMode theme={theme} toggleTheme={toggleTheme} />*/}
            <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Open Sidebar
                <svg className={'h-5 w-5'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="rotate(180)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 2v14h11V5H9z"></path>
                        </g>
                    </g>
                </svg>
            </button>
        </div>

        <div className="navbar-end">
            {login ? <Link to={'/settings'}>
                <button
                    className="btn btn-ghost dark:hover:bg-gray-500 btn-circle">
                    <SettingIcon theme={theme}/>
                </button>

            </Link> : <Upgrade/>}
        </div>
    </div>
  );
}

export const Upgrade = () => {
    return (
        <div>
            <Link to={'/login'}>
                <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Upgrade to Premium
                    {/*<CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true"/>*/}
                    <UpgradeSVG/>
                </button>
            </Link>
      </div>
  );
};

const UpgradeSVG = () => {
    return (
        <div className={'h-8 w-8'}>
            <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"
                 aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"
                 fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fill="#F4900C" d="M14.174 17.075L6.75 7.594l-3.722 9.481z"></path>
                    <path fill="#F4900C" d="M17.938 5.534l-6.563 12.389H24.5z"></path>
                    <path fill="#F4900C" d="M21.826 17.075l7.424-9.481l3.722 9.481z"></path>
                    <path fill="#FFCC4D"
                          d="M28.669 15.19L23.887 3.523l-5.88 11.668l-.007.003l-.007-.004l-5.88-11.668L7.331 15.19C4.197 10.833 1.28 8.042 1.28 8.042S3 20.75 3 33h30c0-12.25 1.72-24.958 1.72-24.958s-2.917 2.791-6.051 7.148z"></path>
                    <circle fill="#5C913B" cx="17.957" cy="22" r="3.688"></circle>
                    <circle fill="#981CEB" cx="26.463" cy="22" r="2.412"></circle>
                    <circle fill="#DD2E44" cx="32.852" cy="22" r="1.986"></circle>
                    <circle fill="#981CEB" cx="9.45" cy="22" r="2.412"></circle>
                    <circle fill="#DD2E44" cx="3.061" cy="22" r="1.986"></circle>
                    <path fill="#FFAC33"
                          d="M33 34H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2zm0-3.486H3a1 1 0 1 1 0-2h30a1 1 0 1 1 0 2z"></path>
                    <circle fill="#FFCC4D" cx="1.447" cy="8.042" r="1.407"></circle>
                    <circle fill="#F4900C" cx="6.75" cy="7.594" r="1.192"></circle>
                    <circle fill="#FFCC4D" cx="12.113" cy="3.523" r="1.784"></circle>
                    <circle fill="#FFCC4D" cx="34.553" cy="8.042" r="1.407"></circle>
                    <circle fill="#F4900C" cx="29.25" cy="7.594" r="1.192"></circle>
                    <circle fill="#FFCC4D" cx="23.887" cy="3.523" r="1.784"></circle>
                    <circle fill="#F4900C" cx="17.938" cy="5.534" r="1.784"></circle>
                </g>
            </svg>
        </div>
    )
}

const SettingIcon = ({theme}: { theme: string }) => {
    return (
        <svg
            className="w-7 h-7 hover:rotate-45"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.1395 12.0002C14.1395 13.1048 13.2664 14.0002 12.1895 14.0002C11.1125 14.0002 10.2395 13.1048 10.2395 12.0002C10.2395 10.8957 11.1125 10.0002 12.1895 10.0002C13.2664 10.0002 14.1395 10.8957 14.1395 12.0002Z"
                stroke={theme === "dark" ? "#fff" : "#000"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none" // Dynamically set fill color based on dark prop
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.57381 18.1003L5.12169 12.8133C4.79277 12.2907 4.79277 11.6189 5.12169 11.0963L7.55821 5.89229C7.93118 5.32445 8.55898 4.98876 9.22644 5.00029H12.1895H15.1525C15.8199 4.98876 16.4477 5.32445 16.8207 5.89229L19.2524 11.0923C19.5813 11.6149 19.5813 12.2867 19.2524 12.8093L16.8051 18.1003C16.4324 18.674 15.8002 19.0133 15.1281 19.0003H9.24984C8.5781 19.013 7.94636 18.6737 7.57381 18.1003Z"
                stroke={theme == "dark" ? "#fff" : "#000"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none" // Dynamically set fill color based on dark prop
            />
        </svg>
    );
};

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function DayLightMode({
                          theme,
                          toggleTheme,
                      }: {
    theme: string;
    toggleTheme: any;
}) {
    const [enabled, setEnabled] = useState(false);

    chrome.storage.sync.get(["enabled"]).then(res => {
        if (res.enabled) {
            setEnabled(res.enabled);
        }
    })

    return (
        <div className="flex p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="none"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle stroke={theme == 'light' ? "#000" : "#fff"} cx="12" cy="12" r="5"/>
                <path
                    stroke={theme == 'light' ? "#000" : "#fff"}
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
            </svg>
            <div className="px-2">
                <Switch
                    onClick={() => {
                        toggleTheme();
                        setToggleToStorage(enabled ? false : true);
                    }}
                    checked={enabled}
                    onChange={() => setEnabled(enabled ? false : true)}
                    className={classNames(
                        enabled ? 'bg-slate-200' : 'bg-gray-200',
                        `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`
                    )}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={classNames(
                            enabled ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0  dark:bg-slate-300'
                        )}
                    />
                </Switch>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke={theme == 'light' ? "#000" : "#fff"}
                      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </div>
    )
}

const setToggleToStorage = async (enabled: boolean) => {
    try {
        await chrome.storage.sync.set({enabled});
    } catch (error) {
        console.error("Error saving selection text:", error);
  }
}