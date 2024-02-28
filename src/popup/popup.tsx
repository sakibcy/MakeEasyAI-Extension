import React from "react";
import '../assets/tailwind.css';

const storage = (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    chrome.storage.sync.set({ name }, () => {
        console.log(`Name is set ${name}`);
        
    });
  
    chrome.storage.local.get(["name"]).then((result) => {
      console.log("Value is " + result.name);
    });
}

const Popup = () => {
    return (
        <div>
            <h1 className="text-5xl text-green-400">Hello World</h1>
            <img src="icon-256x256.png" alt="" />
            <form onSubmit={storage}>
                <input type="text" placeholder='Enter name'/>
                <button type="button">Click</button>
            </form>
        </div>
    );
}

export default Popup;


