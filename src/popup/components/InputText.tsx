import React, { useEffect, useState } from 'react'


export default function InputText() {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    (async () => {
      chrome.storage.sync.get(["userData"]).then((result) => {
        setUserData(result.userData);
      });
    })();
  }, [userData]);

  return (
    <div className="mx-3">
      <textarea
        rows={4}
        name="comment"
        id="comment"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4 dark:bg-gray-200 text-sm"
        defaultValue={userData}
      />
    </div>
  )
}

const getUserData = async () => {
  let data = await chrome.storage.sync.get(["userData"]);
  console.log(data.userData);
  
  return data.userData;
}