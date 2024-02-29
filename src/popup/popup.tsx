import React, { Fragment, useState } from "react";
import "../assets/tailwind.css";
import LanguageSelector from "./components/LanguageSelector";
import Navbar from "./components/Navbar";
import { useDaylightTheme } from "../settings/useDaylightTheme";
import InputText from "./components/InputText";
import Translate from "./components/Translate";
import ShowResult from "./components/ShowResult";
import Bottom from "./components/Bottom";

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
  const {theme, toggleTheme} = useDaylightTheme();

  return (
    <div className={theme}>
    <div style={{ ...EXT_STYLE }} className="dark:bg-dark-mode relative">
      <div className="">
        <Navbar theme={theme} themeNav={toggleTheme} />
        <LanguageSelector theme={theme} />
        <InputText />
        <Translate />
        <ShowResult />
        <Bottom />
      </div>
    </div>
    </div>
  );
}