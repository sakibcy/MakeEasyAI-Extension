import React from "react";
import {createRoot} from 'react-dom/client'
import '../assets/tailwind.css'
import Settings from "../popup/sections/Settings";

const Options = (
    <Settings />
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(Options)


