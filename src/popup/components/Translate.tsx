import React from "react";

export default function Translate() {
  return (
    <div className="flex justify-between mx-3 my-2">
      <div className="order-first">
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
