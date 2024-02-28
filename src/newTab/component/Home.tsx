import React, { useEffect } from 'react'

export function storage(e: any) {
  e.preventDefault();
  const name = e.target[0].value;
  chrome.storage.local.set({ name }, () => {
      console.log(`Name is set ${name}`);
      
  });

  chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value is " + result.name);
  });
}

export default function Home() {
  useEffect(() => {
    chrome.storage.local.get(["name"]).then((result) => {
      console.log("Value is " + result.name);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={storage}>
        <input type="text" placeholder='Enter name'/>
        <button type="button">Click</button>
      </form>
    </div>
  )
}


