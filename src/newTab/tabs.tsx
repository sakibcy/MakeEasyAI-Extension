import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'

export default function Tabs() {
  return (
    <div>
      <h1>This is Tab</h1>
      <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/about">About</a></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </div>
  )
}
