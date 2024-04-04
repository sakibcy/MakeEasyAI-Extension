import React from 'react'
import { useDaylightTheme } from '../../hooks/useDaylightTheme';
import { Link } from 'react-router-dom';

const EXT_STYLE = {
  height: "100vh",
  minHeight: "500px",
  minWidth: "400px",
};

export default function Settings() {
  const { theme, toggleTheme } = useDaylightTheme();

  return (
    <div className={theme == '' ? 'light' : theme}>
      <div style={{ ...EXT_STYLE }} className="dark:bg-dark-mode relative ease-out duration-300">
        <div className="">
          <div className="navbar bg-base-100">

            <div className="navbar-start">
              <Link to={'/'}>
                <div className="btn btn-ghost btn-circle">
                  <svg className='h-5 w-5' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)" stroke="#000000" stroke-width="33.792"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"></path></g></svg>
                </div>
              </Link>
            </div>

            <div className="navbar-center">
              <a className="text-xl">Settings</a>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
                </button>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Notification 1</a></li>
                  <li><a>Notification 2</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
