import React from "react";

export default function Translate() {
  return (
    <div className="flex justify-between mx-3 my-2">
      <div className="order-first">
        <span className="items-centerpx-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
          Google Translator <a className="hover:text-green-700 dark:text-gray-300" href="https://translate.google.com/" target="_blank">©</a>
        </span>
      </div>
      <div className="order-last">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Translate
        </button>
      </div>
    </div>
  );
}
