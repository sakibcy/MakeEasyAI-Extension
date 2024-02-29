import { Switch } from "@headlessui/react";
import React, { useState } from "react";

export default function ({
  theme,
  themeNav,
}: {
  theme: string;
  themeNav: any;
}) {
  return (
    <div className="flex justify-between">
      <div className="order-first">
        <DayLightMode theme={theme} themeNav={themeNav} />
      </div>

      <div className="order-last">
        <button className="btn btn-ghost dark:hover:bg-gray-500 btn-circle">
          <Setting theme={theme} />
        </button>
      </div>
    </div>
  );
}

const Setting = ({ theme }: { theme: string }) => {
  return (
    <svg
      className="w-7 h-7 hover:rotate-45"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.1395 12.0002C14.1395 13.1048 13.2664 14.0002 12.1895 14.0002C11.1125 14.0002 10.2395 13.1048 10.2395 12.0002C10.2395 10.8957 11.1125 10.0002 12.1895 10.0002C13.2664 10.0002 14.1395 10.8957 14.1395 12.0002Z"
        stroke={theme === "dark" ? "#fff" : "#000"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none" // Dynamically set fill color based on dark prop
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.57381 18.1003L5.12169 12.8133C4.79277 12.2907 4.79277 11.6189 5.12169 11.0963L7.55821 5.89229C7.93118 5.32445 8.55898 4.98876 9.22644 5.00029H12.1895H15.1525C15.8199 4.98876 16.4477 5.32445 16.8207 5.89229L19.2524 11.0923C19.5813 11.6149 19.5813 12.2867 19.2524 12.8093L16.8051 18.1003C16.4324 18.674 15.8002 19.0133 15.1281 19.0003H9.24984C8.5781 19.013 7.94636 18.6737 7.57381 18.1003Z"
        stroke={theme == "dark" ? "#fff" : "#000"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
  themeNav,
}: {
  theme: string;
  themeNav: any;
}) {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex p-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle stroke={theme == 'light' ? "#000" : "#fff"} cx="12" cy="12" r="5" /><path
      stroke={theme == 'light' ? "#000" : "#fff"} d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
      <div className="px-2">
        <Switch
          onClick={themeNav}
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? 'bg-slate-100' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2  '
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-300'
            )}
          />
        </Switch>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke={theme == 'light' ? "#000" : "#fff"} d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </div>
  )
}