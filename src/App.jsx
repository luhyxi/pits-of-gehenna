import { Component, useState } from 'react'
import './App.css'
import Navbar from './elements/nav'
import Proj from './pages/Proj'
import Home from './pages/Home'
import Text from './pages/Text'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/text" element ={<Text />} />
        <Route path="/proj" element ={<Proj />} />
        <Route path="/about" element ={<About />} />
      </Routes>
      </div>
    </>
  )
}

export default App
