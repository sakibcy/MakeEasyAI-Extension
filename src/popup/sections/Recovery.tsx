import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Notification from '../components/Notification';

const EXT_STYLE = {
    height: "100vh",
    minHeight: "500px",
    minWidth: "400px",
};

interface ErrorNotification {
    message: string;
    type: string;
}

const Recovery = () => {
    const [errorNotification, setErrorNotification] = useState<ErrorNotification | null>(null);

    const handleRecovery = (e: any) => {
        e.preventDefault();
        setErrorNotification({message: 'Forget Password Feature will coming soon', type: 'info'});

        setTimeout(() => {
            setErrorNotification(null);
        }, 5000);
    }

    return (
        <div style={{...EXT_STYLE}} className="bg-white dark:bg-dark-mode relative ease-out duration-300">
            <div className="mx-auto max-w-md">
                <div className="bg-white">

                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <Link to={'/'}>
                                <div className="btn btn-ghost btn-circle">
                                    <svg className='h-5 w-5' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                         fill="#000000" transform="rotate(90)" stroke="#000000" stroke-width="33.792">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                           stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fill="#000000"
                                                  d="M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <div className="mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                                </svg>
                            </div>
                            <h1 className="block text-2xl font-bold text-gray-800">Forgot password?</h1>
                            <p className="mt-2 text-sm text-gray-600">Don't worry we'll send you reset instructions.</p>
                        </div>

                        <div className="mt-6">
                            <form>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm text-gray-600">Email
                                            address</label>
                                        <div className="relative">
                                            <input type="email" id="email" name="email"
                                                   className="peer block w-full rounded-md border border-gray-200 bg-gray-50 py-3 px-4 text-sm outline-none ring-offset-1 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500"
                                                   required aria-describedby="email-error"/>
                                            <div
                                                className="pointer-events-none absolute top-3 right-0 hidden items-center px-3 peer-invalid:flex">
                                                <svg className="h-5 w-5 text-rose-500" width="16" height="16"
                                                     fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                                </svg>
                                            </div>
                                            <p className="mt-2 hidden text-xs text-rose-600 peer-invalid:block"
                                               id="email-error">Valid email address required for the account recovery
                                                process</p>
                                        </div>
                                    </div>

                                    <button type="submit"
                                            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            onClick={(e) => handleRecovery(e)}
                                            >Reset
                                        password
                                    </button>

                                    {errorNotification && <Notification message={errorNotification.message} type={errorNotification.type} />}
                                </div>
                            </form>
                        </div>
                    </div>
                <p className="mt-40 flex items-center justify-center divide-x divide-gray-300 text-center">
                    {/*<a className="pl-3 text-sm text-gray-600 decoration-2 hover:text-blue-600 hover:underline" href="#"> FAQs </a>*/}
                    <span className="inline pr-3 text-sm text-gray-600">
      Remember your password?
      <Link to={'/'}><a className="font-medium text-blue-600 decoration-2 hover:underline"> Sign in here </a></Link>
    </span>
                    <a className="pl-3 text-sm text-gray-600 decoration-2 hover:text-blue-600 hover:underline" href="#"
                       target="_blank"> Contact Support </a>
                </p>
                </div>

            </div>
        </div>
    );
};

export default Recovery;