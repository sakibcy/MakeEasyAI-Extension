import React from "react";

export default function Bottom() {
  return (
    <div className="flex justify-between m-3">
      <div className="order-first">
      <span className="items-centerpx-2 py-1 text-xs font-normal text-gray-400 dark:text-gray-300">
          v1.0.0
        </span>
      </div>
      <div className="order-last">
        <div className="flex justify-evenly">
          <p className="pr-1 font-normal text-gray-400">Select and Translate</p>
          <img className="w-4 h-4" src="assets/icons/icon-256x256.png" />
        </div>
      </div>
    </div>
  );
}
