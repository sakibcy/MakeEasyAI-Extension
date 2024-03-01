import React, { Fragment, useEffect, useState } from "react";
import "../assets/tailwind.css";
import LanguageSelector from "./components/LanguageSelector";
import Navbar from "./components/Navbar";
import { useDaylightTheme } from "../hooks/useDaylightTheme";
import InputText from "./components/InputText";
import Translate from "./components/Translate";
import ShowResult from "./components/ShowResult";
import Bottom from "./components/Bottom";

const EXT_STYLE = {
  height: "100vh",
  minHeight: "500px",
  minWidth: "400px",
};

export default function popup() {
  const { theme, toggleTheme } = useDaylightTheme();

  return (
    <div className={theme}>
      <div style={{ ...EXT_STYLE }} className="dark:bg-dark-mode relative ease-out duration-300">
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