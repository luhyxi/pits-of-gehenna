import { Component, useState } from 'react'
import './App.css'
import Navbar from './elements/nav'
import Proj from './pages/Proj'
import Home from './pages/Home'
import Text from './pages/Text'
import About from './pages/About'

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/text":
      component = <Text />
      break
    case "/proj":
      component = <Proj />
      break
    case "/about":
      component = <About />
      break
    }

  return (
    <>
      <Navbar />
      {component}
    </>
  )
}

export default App
