import {Switch} from "@headlessui/react";
import React, {Fragment, useEffect, useState} from "react";
// import { Link } from "react-router-dom";
import {CheckCircleIcon} from "@heroicons/react/20/solid";

// export default function Navbar ({
//   theme,
//   toggleTheme,
// }: {
//   theme: string;
//   toggleTheme: any;
// }) {
//
//   let login: boolean;
//   login = false;
//
//   return (
//     <div className="navbar">
//         <div className="navbar-start">
//             {/*<DayLightMode theme={theme} toggleTheme={toggleTheme} />*/}
//             <button
//                 type="button"
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//                 Open Sidebar
//                 <svg className={'h-5 w-5'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" transform="rotate(180)">
//                     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
//                     <g id="SVGRepo_iconCarrier">
//                         <g>
//                             <path fill="none" d="M0 0h24v24H0z"></path>
//                             <path
//                                 d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 2v14h11V5H9z"></path>
//                         </g>
//                     </g>
//                 </svg>
//             </button>
//         </div>
//
//         <div className="navbar-end">
//             {login ? <Link to={'/settings'}>
//                 <button
//                     className="btn btn-ghost dark:hover:bg-gray-500 btn-circle">
//                     <SettingIcon theme={theme}/>
//                 </button>
//
//             </Link> : <Upgrade/>}
//         </div>
//     </div>
//   );
// }

import {Dialog, Transition} from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
// @ts-ignore
import TranslatorIcon from "../iconsComponents/TranslatorIcon";
import {RecoilRoot} from "recoil";
import {Link} from "react-router-dom";
import {current} from "@reduxjs/toolkit";
import {signal} from "@preact/signals-react";

const navigation = [
    {name: 'Translator', href: '/', icon: TranslatorIcon, current: true},
    {name: 'Summarizer', href: '/summarizer', icon: UsersIcon, current: false},
    {name: 'Projects', href: '#', icon: FolderIcon, current: false},
    {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
    {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
    {name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
]

const teams = [
    {id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false},
    {id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false},
    {id: 3, name: 'Workcation', href: '#', initial: 'W', current: false},
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

function showNavName(passNavigation: string): string {
    if (passNavigation === 'Translator') {
        return 'Translator';
    } else if (passNavigation === 'Summarizer') {
        return 'Summarizer';
    } else {
        return '';
    }
}


export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [currentTranslate, setCurrentTranslate] = useState(true)
    const [currentSummary, setCurrentSummary] = useState(false)
    const [navbarName, setNavbarName] = useState('Translator')

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80"/>
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5"
                                                    onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <img
                                                className="h-8 w-auto"
                                                src="./icon-256x256.png"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <div onClick={() => setSidebarOpen(false)}>
                                                <NavigationItems currentSummary={currentSummary}
                                                                 setCurrentSummary={setCurrentSummary}
                                                                 currentTranslate={currentTranslate}
                                                                 setCurrentTranslate={setCurrentTranslate}
                                                                 setNavbarName={setNavbarName}
                                                                 navbarName={navbarName}
                                                />
                                            </div>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                        <Link to='/login'>
                            <div className="flex h-16 shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="./icon-256x256.png"
                                    alt="Your Company"
                                />
                            </div>
                        </Link>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <div onClick={() => setSidebarOpen(false)}>
                                    <NavigationItems currentSummary={currentSummary}
                                                     setCurrentSummary={setCurrentSummary}
                                                     currentTranslate={currentTranslate}
                                                     setCurrentTranslate={setCurrentTranslate}
                                                     setNavbarName={setNavbarName}
                                                     navbarName={navbarName}
                                    />
                                </div>
                                <li className="-mx-6 mt-auto">
                                    <Link
                                        to="/login"
                                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                                    >
                                        <img
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span className="sr-only">Your profile</span>
                                        <span aria-hidden="true">Tom Cook</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div
                    className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                            onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
                        {navbarName}
                    </div>
                    <Link target={'_blank'} to="/login">
                        <span className="sr-only">Your profile</span>
                        <img
                            className="h-8 w-8 rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </Link>
                </div>

                {/*<main className="lg:pl-72">*/}
                {/*    <div className="xl:pr-96">*/}
                {/*        <div className="px-3 py-1 sm:px-6 lg:px-8 lg:py-6">*/}
                {/*            /!* Main area *!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</main>*/}

                {/*<aside*/}
                {/*    className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">*/}
                {/*    /!* Secondary column (hidden on smaller screens) *!/*/}
                {/*</aside>*/}
            </div>
        </>
    )
}

const NavigationItems = ({currentSummary, setCurrentSummary, currentTranslate, setCurrentTranslate, navbarName, setNavbarName}: {
    currentSummary: boolean,
    setCurrentSummary: any,
    currentTranslate: boolean,
    setCurrentTranslate: any,
    navbarName: string,
    setNavbarName: any
}) => {
    return (
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
                <ul role="list" className="-mx-2 space-y-1">
                    <li key={'Translator'}>
                        <Link
                            to={'/'}
                            className={classNames(
                                currentTranslate
                                    ? 'bg-gray-50 text-indigo-600'
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                            onClick={() => {
                                setCurrentTranslate(true);
                                setCurrentSummary(false);
                                setNavbarName('Translator')
                            }}
                        >
                            {/*<TranslatorIcon />*/}
                            <TranslatorIcon
                                className={classNames(
                                    currentTranslate ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                    'h-6 w-6 shrink-0'
                                )}
                                aria-hidden="true"
                            />
                            Translator
                        </Link>
                    </li>
                    <li key={'Summarizer'}>
                        <Link
                            to={'/summarizer'}
                            onClick={() => {
                                setCurrentTranslate(false);
                                setCurrentSummary(true);
                                setNavbarName('Summarizer');
                            }}
                            className={classNames(
                                currentSummary
                                    ? 'bg-gray-50 text-indigo-600'
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                        >
                            {/*<TranslatorIcon />*/}
                            <TranslatorIcon
                                className={classNames(
                                    currentSummary ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                    'h-6 w-6 shrink-0'
                                )}
                                aria-hidden="true"
                            />
                            Summarizer
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">Your
                    teams
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                        <li key={team.name}>
                            <a
                                href={team.href}
                                className={classNames(
                                    team.current
                                        ? 'bg-gray-50 text-indigo-600'
                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                            >
                                  <span
                                      className={classNames(
                                          team.current
                                              ? 'text-indigo-600 border-indigo-600'
                                              : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                          'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                      )}
                                  >
                                    {team.initial}
                                  </span>
                                <span className="truncate">{team.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <Upgrade/>
            </li>
        </ul>
    )
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

// function classNames(...classes: any) {
//     return classes.filter(Boolean).join(' ')
// }
//
// function DayLightMode({
//                           theme,
//                           toggleTheme,
//                       }: {
//     theme: string;
//     toggleTheme: any;
// }) {
//     const [enabled, setEnabled] = useState(false);
//
//     chrome.storage.sync.get(["enabled"]).then(res => {
//         if (res.enabled) {
//             setEnabled(res.enabled);
//         }
//     })
//
//     return (
//         <div className="flex p-3">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="none"
//                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle stroke={theme == 'light' ? "#000" : "#fff"} cx="12" cy="12" r="5"/>
//                 <path
//                     stroke={theme == 'light' ? "#000" : "#fff"}
//                     d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
//             </svg>
//             <div className="px-2">
//                 <Switch
//                     onClick={() => {
//                         toggleTheme();
//                         setToggleToStorage(enabled ? false : true);
//                     }}
//                     checked={enabled}
//                     onChange={() => setEnabled(enabled ? false : true)}
//                     className={classNames(
//                         enabled ? 'bg-slate-200' : 'bg-gray-200',
//                         `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none`
//                     )}
//                 >
//                     <span className="sr-only">Use setting</span>
//                     <span
//                         aria-hidden="true"
//                         className={classNames(
//                             enabled ? 'translate-x-5' : 'translate-x-0',
//                             'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0  dark:bg-slate-300'
//                         )}
//                     />
//                 </Switch>
//             </div>
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
//                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path stroke={theme == 'light' ? "#000" : "#fff"}
//                       d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//         </div>
//     )
// }

const setToggleToStorage = async (enabled: boolean) => {
    try {
        await chrome.storage.sync.set({enabled});
    } catch (error) {
        console.error("Error saving selection text:", error);
    }
}