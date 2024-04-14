import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup"
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import Settings from "./sections/Settings";
import Login from "./sections/Login";
import SignUp from "./sections/SignUp";
import Recovery from "./sections/Recovery";
import Summarizer from "./sections/Summarizer";
import {RecoilRoot} from "recoil";

function init() {
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer)
    console.log(appContainer)
    root.render(
        <HashRouter>
            <RecoilRoot>
            <Popup />
            </RecoilRoot>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Popup />} />*/}
            {/*    <Route path="/settings" element={<Settings />} />*/}
            {/*    <Route path="/login" element={<Login />} />*/}
            {/*    <Route path="/signup" element={<SignUp />} />*/}
            {/*    <Route path="/recovery" element={<Recovery />} />*/}
            {/*    <Route path="/summarizer" element={<Summarizer />} />*/}
            {/*</Routes>*/}
        </HashRouter>
        // <Popup />
    )
}

init();