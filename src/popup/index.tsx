import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup"
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import Settings from "./sections/Settings";

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
            <Routes>
                <Route path="/" element={<Popup />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </HashRouter>
        // <Popup />
    )
}

init();