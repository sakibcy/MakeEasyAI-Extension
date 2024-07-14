import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import apiClient from '../../apis/apiClient';
import apiClientAuth from '../../apis/apiClientAuth';
import Notification from '../components/Notification';
import Cookies from 'js-cookie';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../state/atoms';
import { isAuthenticated } from '../../apis/isAuthenticated';

const EXT_STYLE = {
    height: "100vh",
    minHeight: "500px",
    minWidth: "400px",
};

interface ErrorNotification {
    message: string;
    type: string;
}

const SignUp = () => {
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [passwordLengthError, setPasswordLengthError] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('Password did not match');

    const [errorNotification, setErrorNotification] = useState<ErrorNotification | null>(null);

    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);

    const navigate = useNavigate();

    const validateEmail = (e: any) => {
        const email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailErrorMessage('');
        } else {
            setEmailErrorMessage("Please enter a valid email");
        }
    }

    const validatePasswordLength = (e: any) => {
        const password = e.target.value;

        if (validator.isLength(password, { min: 6 })) {
            setPasswordLengthError('');
        } else {
            setPasswordLengthError("Password must be at least 6 characters long");
        }
    }

    const validatePassword = (e: any) => {
        const passwordNew = e.target.value;

        if (passwordNew === password) {
            setPasswordValidation('');
        } else {
            setPasswordValidation('Password did not match');
        }
    }

    const handleRegister = async (e: any) => {
        e.preventDefault();

        try {
            const res = await apiClientAuth.post('/signup', {
                email,
                password,
            });
            if (res) {
                const token = res.headers['x-auth-token'];
                chrome.cookies.set({
                    url: 'http://localhost:3001',
                    name: 'x-auth-token',
                    value: token,
                    httpOnly: true
                });
                
                const resAuth = await isAuthenticated();

                setAuthenticated(resAuth.data.status.type);
                navigate('/translate')
            }


        } catch (error: any) {
            setErrorNotification(error.response.data.status);
        }

        setTimeout(() => {
            setErrorNotification(null);
        }, 5000)
    }

    return (
        <div style={{ ...EXT_STYLE }} className="bg-white dark:bg-dark-mode relative ease-out duration-300">
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
                                <svg className={'h-8 w-8 p-1'} fill="#3B82F6" height="200px" width="200px" version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 481.5 481.5" stroke="#3B82F6"
                                    stroke-width="30">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <g>
                                                <path
                                                    d="M0,240.7c0,7.5,6,13.5,13.5,13.5h326.1l-69.9,69.9c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l93-93 c5.3-5.3,5.3-13.8,0-19.1l-93-93c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l69.9,69.9h-326C6,227.2,0,233.2,0,240.7z"></path>
                                                <path
                                                    d="M382.4,0H99C44.4,0,0,44.4,0,99v58.2c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V99c0-39.7,32.3-72,72-72h283.5 c39.7,0,72,32.3,72,72v283.5c0,39.7-32.3,72-72,72H99c-39.7,0-72-32.3-72-72V325c0-7.5-6-13.5-13.5-13.5S0,317.5,0,325v57.5 c0,54.6,44.4,99,99,99h283.5c54.6,0,99-44.4,99-99V99C481.4,44.4,437,0,382.4,0z"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <h1 className="block text-2xl font-bold text-gray-800">Sign up for your account</h1>
                            <p className="mt-2 text-sm font-bold text-green-700">Start a 14 day free trial</p>
                        </div>

                        <div className="mt-6">
                            <form className="max-w-sm mx-auto">
                                <div className="mb-5">
                                    <label htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                        email</label>
                                    <input type="email" id="email"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="name@mail.com" required
                                        onChange={(e) => {
                                            validateEmail(e);
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <span className='text-red-600 font-semibold'>
                                        {emailErrorMessage}
                                    </span>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                        password</label>
                                    <input type="password" id="password"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        required onChange={(e) => {
                                            validatePasswordLength(e)
                                            setPassword(e.target.value);
                                        }} />
                                    <span className='text-red-600 font-semibold'>
                                        {passwordLengthError}
                                    </span>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="repeat-password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat
                                        password</label>
                                    <input type="password" id="repeat-password"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        required onChange={e => validatePassword(e)} />
                                    <span className='text-red-600 font-semibold'>
                                        {passwordValidation}
                                    </span>
                                </div>
                                <div className="flex justify-center items-start mb-5">
                                    <div className="flex items-center h-5">
                                        <input id="terms" type="checkbox" value=""
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                            required />
                                    </div>
                                    <label htmlFor="terms"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                                        with the <a href="#"
                                            className="text-blue-600 hover:underline dark:text-blue-500">terms
                                            and
                                            conditions</a></label>
                                </div>
                                <button type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleRegister}
                                >Register
                                </button>
                                {errorNotification && <Notification message={errorNotification.message} type={errorNotification.type} />}
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignUp;