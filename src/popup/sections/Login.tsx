import React from 'react';
import {Link} from "react-router-dom";

const EXT_STYLE = {
    height: "100vh",
    minHeight: "500px",
    minWidth: "400px",
};

const Login = () => {
    return (
        <div className="dark:bg-dark-mode relative ease-out duration-300">
                    <div
                        className="flex flex-1 flex-col min-h-full justify-center px-4 py-5 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="mx-auto w-full max-w-sm lg:w-96">
                            <div className={'text-center'}>
                                <img
                                    className="h-9 w-auto mx-auto"
                                    src="./icon-256x256.png"
                                    alt="Your Company"
                                />
                                <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Sign in to your account
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Not a member?{' '}
                                    <Link to={'/signup'}>
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Start a 14 day free trial
                                        </a>
                                    </Link>
                                </p>
                            </div>

                            <div className="mt-10">
                                <div>
                                    <form action="#" method="POST" className="space-y-4">
                                        <div>
                                            <label htmlFor="email"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="password"
                                                   className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="remember-me"
                                                       className="ml-3 block text-sm leading-6 text-gray-700">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm leading-6">
                                                <Link to={'/recovery'}>
                                                    <a href="#"
                                                       className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                        Forgot password?
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                        <Link to={'/signup'}>
                                            <a href="#"
                                               className="pt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-500 flex justify-center">
                                                Don't have an account?
                                            </a>
                                        </Link>
                                    </form>
                                </div>

                                <div className="mt-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-gray-200"/>
                                        </div>
                                        <div className="relative flex justify-center text-sm font-medium leading-6">
                                            <span className="bg-white px-6 text-gray-900">Or continue with</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-2 gap-4">

                                        <a
                                            href="#"
                                            className="
                                                    flex w-full items-center justify-center gap-3 rounded-md
                                                    transition duration-300 ease-out hover:ease-in-out
                                                    bg-white dark:bg-gray-900 border border-gray-300 shadow-md px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                                        >
                                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                 width="800px"
                                                 height="800px"
                                                 viewBox="-0.5 0 48 48" version="1.1"><title>Google-color</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs></defs>
                                                <g id="Icons" stroke="none" stroke-width="1" fill="none"
                                                   fill-rule="evenodd">
                                                    <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                                        <g id="Google" transform="translate(401.000000, 860.000000)">
                                                            <path
                                                                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                                id="Fill-1" fill="#FBBC05"></path>
                                                            <path
                                                                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                                id="Fill-2" fill="#EB4335"></path>
                                                            <path
                                                                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                                id="Fill-3" fill="#34A853"></path>
                                                            <path
                                                                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                                id="Fill-4" fill="#4285F4"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span
                                                className="text-sm font-semibold leading-6 text-gray-800 dark:text-white">Google</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                                        >
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                            </svg>
                                            <span className="text-sm font-semibold leading-6">Twitter</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Login;