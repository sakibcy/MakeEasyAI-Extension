import React from "react";
import "../assets/tailwind.css";

const storage = (e: any) => {
  e.preventDefault();
  const name = e.target[0].value;
  chrome.storage.sync.set({ name }, () => {
    console.log(`Name is set ${name}`);
  });

  chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value is " + result.name);
  });
};

const EXT_STYLE = {
  height: "100vh",
  minHeight: "500px",
  minWidth: "400px",
};

export default function popup() {
  return (
    <div style={{ ...EXT_STYLE }} className="bg-base-100">
      <div className="navbar m-0 bg-neutral-100	">
        <div className="navbar-start">
          <img className="size-7" src="assets/icons/icon-256x256.png" />
        </div>
        <div className="navbar-center">
          <p className="text-base font-medium">Select and Translate</p>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <img
              className="size-9"
              src="assets/icons/setting-gear-svgrepo-com.svg"
            />
          </button>
        </div>
      </div>

      <div className="navbar">
        <div className="navbar-start">
          <select className="select select-info select-xs w-full max-w-xs">
            <option disabled selected>
              Auto detect
            </option>
            <option>English</option>
            <option>Bengali</option>
            <option>Japanese</option>
          </select>
        </div>

        <div className="navbar-center px-2">
          <button className="btn btn-square btn-xs">
            <img src="assets/icons/arrow-repeat-242-svgrepo-com.svg" />
          </button>
        </div>

        <div className="navbar-end">
          <select className="select select-info select-xs w-full max-w-xs">
            <option disabled selected>
              Auto detect
            </option>
            <option>English</option>
            <option>Bengali</option>
            <option>Japanese</option>
          </select>
        </div>
      </div>

      {/* <div className="navbar bg-base-100 flex">
        <div className="flex justify-between">
		  <img className="size-6" src="assets/icons/icon-256x256.png" />
        </div>
		<div className="">
          <a className="text-base">Select and Translate</a>
		</div>
        <div className="">
          <button className="btn btn-circle btn-sm">
            <img src="assets/icons/setting-gear-svgrepo-com.svg" />
          </button>
        </div>
      </div> */}
    </div>
  );
}
