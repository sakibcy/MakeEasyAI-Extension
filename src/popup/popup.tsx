import React, { Fragment, useEffect, useState } from "react";
import "../assets/tailwind.css";
import Navbar from "./components/Navbar";
import { useDaylightTheme } from "../hooks/useDaylightTheme";
import Translate from "./components/Translate";
import Login from "./sections/Login";
import { RecoilRoot, useRecoilState } from "recoil";
import { Route, Routes, useNavigate } from "react-router-dom";
import Settings from "./sections/Settings";
import SignUp from "./sections/SignUp";
import Recovery from "./sections/Recovery";
import Summarizer from "./sections/Summarizer";
import Cookies from "js-cookie";
import apiClient from "../apis/apiClient";
import { authenticatedState } from "../state/atoms";

const EXT_STYLE = {
    height: "100vh",
    minHeight: "500px",
    minWidth: "400px",
};

function App(props: { theme: string, toggleTheme: () => void }) {
    return (
        <div style={{ ...EXT_STYLE }} className={`${props.theme == "" ? "light" : props.theme} w-full`}>
            <div className="dark:bg-dark-mode relative ease-out duration-300">
                <div className="">
                    {/*<Navbar theme={props.theme} toggleTheme={props.toggleTheme}/>*/}
                    <Navbar />
                    <Translate />
                    {/* <Bottom /> */}
                    {/*<FontPage />*/}
                </div>
            </div>
        </div>);
}

export default function popup() {
    const { theme, toggleTheme } = useDaylightTheme();
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const cookie = await chrome.cookies.get(
                {
                    url: 'http://localhost:3001',
                    name: 'x-auth-token'
                }
            );
            
            if (cookie) {
                console.log(cookie.expirationDate);
                
                setAuthenticated('Success');
                navigate("/translate")
            }

            // try {
            //     const res = await apiClient.get(
            //         '/authenticated',
            //         { headers: { 'Authorization': `Bearer ${await getCookie()}` } }
            //     );

            //     if (res) {
            //         setAuthenticated(res.data.status.type);
            //         navigate("/translate");

            //     }

            // } catch (error) {
            //     console.log(error);
            //     // navigate("/")
            // }
        })()
    }, [authenticated]);

    return (
        authenticated === 'Success' ? <RecoilRoot>
            <div style={{ ...EXT_STYLE }}>
                <Navbar />
                {/*<App theme={theme} toggleTheme={toggleTheme}/>*/}
                <Routes>
                    <Route path={"/"} element={<Login />} />
                    <Route path="/translate" element={<Translate />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/summarizer" element={<Summarizer />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/recovery" element={<Recovery />} />
                </Routes>
            </div>
        </RecoilRoot> : <div style={{ ...EXT_STYLE }}>
            {authenticated === 'Success' ? <Navbar /> : <></>}
            <Routes>
                <Route path={"/"} element={<Login />} />
                <Route path="/translate" element={<Translate />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/summarizer" element={<Summarizer />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/recovery" element={<Recovery />} />
            </Routes>
        </div>
          
    );
}



