import React, { Fragment, useEffect, useState } from "react";
import "../assets/tailwind.css";
import Navbar, { Upgrade } from "./components/Navbar";
import { useDaylightTheme } from "../hooks/useDaylightTheme";
import Translate from "./components/Translate";
import Login from "./sections/Login";
import { RecoilRoot, useRecoilState } from "recoil";
import { Route, Routes, useNavigate } from "react-router-dom";
import Settings from "./sections/Settings";
import SignUp from "./sections/SignUp";
import Recovery from "./sections/Recovery";
import Summarizer from "./sections/Summarizer";
import Cookies from "js-cookie";
import apiClient, { getCookie } from "../apis/apiClient";
import { authenticatedState } from "../state/atoms";

const EXT_STYLE = {
    height: "100vh",
    minHeight: "500px",
    minWidth: "400px",
};

function App(props: { theme: string, toggleTheme: () => void }) {
    return (
        <div style={{ ...EXT_STYLE }} className={`${props.theme == "" ? "light" : props.theme} w-full`}>
            <div className="dark:bg-dark-mode relative ease-out duration-300">
                <div className="">
                    {/*<Navbar theme={props.theme} toggleTheme={props.toggleTheme}/>*/}
                    <Navbar />
                    <Translate />
                    {/* <Bottom /> */}
                    {/*<FontPage />*/}
                </div>
            </div>
        </div>);
}

export default function popup() {
    const { theme, toggleTheme } = useDaylightTheme();
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const cookie = await chrome.cookies.get(
                {
                    url: 'http://localhost:3001',
                    name: 'x-auth-token'
                }
            );

            try {
                const res = await apiClient.get(
                    '/authenticated',
                    { headers: { 'Authorization': `Bearer ${await getCookie()}` } }
                );

                if (res) {
                    setAuthenticated(res.data.status.type);
                    navigate("/translate");

                }

            } catch (error) {
                console.log(error);
                // navigate("/")
            }
        })()
    });

    return (
        authenticated === 'Success' ? <RecoilRoot>
            <div style={{ ...EXT_STYLE }}>
                <Navbar />
                {/*<App theme={theme} toggleTheme={toggleTheme}/>*/}
                <Routes>
                    <Route path={"/"} element={<Login />} />
                    <Route path="/translate" element={<Translate />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/summarizer" element={<Summarizer />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/recovery" element={<Recovery />} />
                </Routes>
            </div>
        </RecoilRoot> : <div style={{ ...EXT_STYLE }}>
            {authenticated === 'Success' ? <Navbar /> : <></>}
            <Routes>
                <Route path={"/"} element={<Login />} />
                <Route path="/translate" element={<Translate />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/summarizer" element={<Summarizer />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/recovery" element={<Recovery />} />
            </Routes>
        </div>
        //   <SideBarExp theme={theme} toggleTheme={toggleTheme} />
        //   
    );
}

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
function SideBarExp({ theme, toggleTheme }: { theme: string, toggleTheme: any }) {


    return (
        <>
            <div style={{ ...EXT_STYLE }} className="h-screen bg-white">

                <div className=" float-left min-h-screen select-none border bg-gray-200 shadow">
                    <div className="[&>.tooltip]:hover:opacity-100 h-14 w-12 cursor-pointer p-3">
                        <div
                            className="border-gray pointer-events-auto absolute flex h-10 w-8 items-center justify-center rounded-full text-gray-200 shadow duration-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                            </svg>
                        </div>
                        <div
                            className="tooltip absolute z-50 mt-3 ml-14 w-max rounded-md bg-gray-700 p-1 text-xs text-white opacity-0 shadow-md duration-200">Search
                            Documents
                        </div>
                    </div>

                    <div className="[&>.tooltip]:hover:opacity-100 h-14 w-12 cursor-pointer p-3">
                        <div
                            className="border-gray pointer-events-auto absolute flex h-10 w-8 items-center justify-center rounded-full bg-gray-700 text-gray-200 shadow duration-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <div
                            className="tooltip absolute z-50 mt-3 ml-14 w-max rounded-md bg-gray-700 p-1 text-xs text-white opacity-0 shadow-md duration-200">Adjustments
                        </div>
                    </div>

                    <div className="[&>.tooltip]:hover:opacity-100 h-14 w-10 cursor-pointer p-3">
                        <div
                            className="border-gray pointer-events-auto absolute flex h-10 w-8 items-center justify-center rounded-full text-gray-200 shadow duration-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <div
                            className="tooltip absolute z-50 mt-3 ml-14 w-max rounded-md bg-gray-700 p-1 text-xs text-white opacity-0 shadow-md duration-200">Reports
                        </div>
                    </div>

                    <div className="[&>.tooltip]:hover:opacity-100 h-14 w-8 cursor-pointer p-3">
                        <div
                            className="border-gray pointer-events-auto absolute flex h-10 w-8 items-center justify-center rounded-full text-gray-200 shadow duration-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div
                            className="tooltip absolute z-50 mt-3 ml-14 w-max rounded-md bg-gray-700 p-1 text-xs text-white opacity-0 shadow-md duration-200">Revenue
                        </div>
                    </div>

                </div>
                <div className={'float-right'}>
                    <div className={''}>
                        <App theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>
            </div>

        </>
    )
}

// import { Dialog, Transition } from '@headlessui/react'
// import {
//   Bars3Icon,
//   CalendarIcon,
//   ChartPieIcon,
//   DocumentDuplicateIcon,
//   FolderIcon,
//   UsersIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import TranslatorIcon from "./iconsComponents/TranslatorIcon";
// import {RecoilRoot} from "recoil";
// import {Link} from "react-router-dom";
//
// const navigation = [
//   { name: 'Translator', href: '/', icon: TranslatorIcon, current: true },
//   { name: 'Summarizer', href: '/summarizer', icon: UsersIcon, current: false },
//   { name: 'Projects', href: '#', icon: FolderIcon, current: false },
//   { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
//   { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
//   { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
// ]
// const teams = [
//   { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
//   { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
//   { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
// ]
//
// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(' ')
// }
//
// function FontPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//
//   return (
//       <>
//         {/*
//         This example requires updating your template:
//
//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}
//         <div>
//           <Transition.Root show={sidebarOpen} as={Fragment}>
//             <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
//               <Transition.Child
//                   as={Fragment}
//                   enter="transition-opacity ease-linear duration-300"
//                   enterFrom="opacity-0"
//                   enterTo="opacity-100"
//                   leave="transition-opacity ease-linear duration-300"
//                   leaveFrom="opacity-100"
//                   leaveTo="opacity-0"
//               >
//                 <div className="fixed inset-0 bg-gray-900/80" />
//               </Transition.Child>
//
//               <div className="fixed inset-0 flex">
//                 <Transition.Child
//                     as={Fragment}
//                     enter="transition ease-in-out duration-300 transform"
//                     enterFrom="-translate-x-full"
//                     enterTo="translate-x-0"
//                     leave="transition ease-in-out duration-300 transform"
//                     leaveFrom="translate-x-0"
//                     leaveTo="-translate-x-full"
//                 >
//                   <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-in-out duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in-out duration-300"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                       <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
//                         <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
//                           <span className="sr-only">Close sidebar</span>
//                           <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
//                         </button>
//                       </div>
//                     </Transition.Child>
//                     {/* Sidebar component, swap this element with another sidebar if you like */}
//                     <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
//                       <div className="flex h-16 shrink-0 items-center">
//                         <img
//                             className="h-8 w-auto"
//                             src="./icon-256x256.png"
//                             alt="Your Company"
//                         />
//                       </div>
//                       <nav className="flex flex-1 flex-col">
//                         <ul role="list" className="flex flex-1 flex-col gap-y-7">
//                           <li>
//                             <ul role="list" className="-mx-2 space-y-1">
//                               {navigation.map((item) => (
//                                   <li key={item.name}>
//                                     <Link
//                                         to={item.href}
//                                         className={classNames(
//                                             item.current
//                                                 ? 'bg-gray-50 text-indigo-600'
//                                                 : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
//                                             'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
//                                         )}
//                                     >
//                                       <item.icon
//                                           className={classNames(
//                                               item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
//                                               'h-6 w-6 shrink-0'
//                                           )}
//                                           aria-hidden="true"
//                                       />
//                                       {item.name}
//                                     </Link>
//                                   </li>
//                               ))}
//                             </ul>
//                           </li>
//                           <li>
//                             <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
//                             <ul role="list" className="-mx-2 mt-2 space-y-1">
//                               {teams.map((team) => (
//                                   <li key={team.name}>
//                                     <a
//                                         href={team.href}
//                                         className={classNames(
//                                             team.current
//                                                 ? 'bg-gray-50 text-indigo-600'
//                                                 : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
//                                             'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
//                                         )}
//                                     >
//                                   <span
//                                       className={classNames(
//                                           team.current
//                                               ? 'text-indigo-600 border-indigo-600'
//                                               : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
//                                           'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
//                                       )}
//                                   >
//                                     {team.initial}
//                                   </span>
//                                       <span className="truncate">{team.name}</span>
//                                     </a>
//                                   </li>
//                               ))}
//                             </ul>
//                             <Upgrade />
//                           </li>
//                         </ul>
//                       </nav>
//                     </div>
//                   </Dialog.Panel>
//                 </Transition.Child>
//               </div>
//             </Dialog>
//           </Transition.Root>
//
//           {/* Static sidebar for desktop */}
//           <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
//             {/* Sidebar component, swap this element with another sidebar if you like */}
//             <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
//               <Link to='/login'>
//                 <div className="flex h-16 shrink-0 items-center">
//                   <img
//                       className="h-8 w-auto"
//                       src="./icon-256x256.png"
//                       alt="Your Company"
//                   />
//                 </div>
//               </Link>
//               <nav className="flex flex-1 flex-col">
//                 <ul role="list" className="flex flex-1 flex-col gap-y-7">
//                   <li>
//                     <ul role="list" className="-mx-2 space-y-1">
//                       {navigation.map((item) => (
//                           <li key={item.name}>
//                             <a
//                                 href={item.href}
//                                 className={classNames(
//                                     item.current
//                                         ? 'bg-gray-50 text-indigo-600'
//                                         : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
//                                     'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
//                                 )}
//                             >
//                               <item.icon
//                                   className={classNames(
//                                       item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
//                                       'h-6 w-6 shrink-0'
//                                   )}
//                                   aria-hidden="true"
//                               />
//                               {item.name}
//                             </a>
//                           </li>
//                       ))}
//                     </ul>
//                   </li>
//                   <li>
//                     <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
//                     <ul role="list" className="-mx-2 mt-2 space-y-1">
//                       {teams.map((team) => (
//                           <li key={team.name}>
//                             <a
//                                 href={team.href}
//                                 className={classNames(
//                                     team.current
//                                         ? 'bg-gray-50 text-indigo-600'
//                                         : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
//                                     'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
//                                 )}
//                             >
//                           <span
//                               className={classNames(
//                                   team.current
//                                       ? 'text-indigo-600 border-indigo-600'
//                                       : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
//                                   'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
//                               )}
//                           >
//                             {team.initial}
//                           </span>
//                               <span className="truncate">{team.name}</span>
//                             </a>
//                           </li>
//                       ))}
//                       <li>
//                         <Upgrade />
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="-mx-6 mt-auto">
//                     <a
//                         href="#"
//                         className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
//                     >
//                       <img
//                           className="h-8 w-8 rounded-full bg-gray-50"
//                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                           alt=""
//                       />
//                       <span className="sr-only">Your profile</span>
//                       <span aria-hidden="true">Tom Cook</span>
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//
//           <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
//             <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
//               <span className="sr-only">Open sidebar</span>
//               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//             </button>
//             <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Translator</div>
//             <a href="#">
//               <span className="sr-only">Your profile</span>
//               <img
//                   className="h-8 w-8 rounded-full bg-gray-50"
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//               />
//             </a>
//           </div>
//
//           <main className="lg:pl-72">
//             <div className="xl:pr-96">
//               <div className="px-3 py-1 sm:px-6 lg:px-8 lg:py-6">
//                 {/* Main area */}
//                 <Translate />
//               </div>
//             </div>
//           </main>
//
//           <aside className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
//             {/* Secondary column (hidden on smaller screens) */}
//           </aside>
//         </div>
//       </>
//   )
// }



