import React, { Fragment, useEffect, useState } from "react";
import "../assets/tailwind.css";
import Navbar from "./components/Navbar";
import { useDaylightTheme } from "../hooks/useDaylightTheme";
import Translate from "./components/Translate";
import Login from "./sections/Login";

const EXT_STYLE = {
  height: "100vh",
  minHeight: "500px",
  minWidth: "400px",
};

function App(props: { theme: string, toggleTheme: () => void }) {
  return <div className={props.theme == "" ? "light" : props.theme}>
    <div style={{...EXT_STYLE}} className="dark:bg-dark-mode relative ease-out duration-300">
      <div className="">
        <Navbar theme={props.theme} toggleTheme={props.toggleTheme}/>
        <Translate/>
        {/* <Bottom /> */}
      </div>
    </div>
  </div>;
}

const signin = false;

export default function popup() {
  const { theme, toggleTheme } = useDaylightTheme();

  return (
    signin ? <App theme={theme} toggleTheme={toggleTheme}/> : <Login />
  );
}

