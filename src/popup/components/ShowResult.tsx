import React, { useState } from 'react'

export default function ShowResult() {
  const [data, setData] = useState(false);
  const handleClick = () => {
    setData(data => data == true ? false : true);
  }

  return (
    <div className="mx-3">
      <button onClick={handleClick}>Click</button>
      {data ? <textarea
        rows={8}
        name="comment"
        id="comment"
        readOnly={true}
        className="block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-200"
        defaultValue={data.toString()} /> : <Skeleton />}

    </div>
  )
}

function Skeleton() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-52 w-full bg-slate-300">
      <div className='pt-5 pl-5 pr-5'>
        <div className="skeleton h-4 w-full bg-red-400"></div>
        <div className="skeleton h-4 w-full bg-red-300"></div>
      </div>
      </div>
      
      
    </div>
  )
}

