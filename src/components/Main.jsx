import React from 'react'
import Contact from "../components/Contact"
import About from "../components/About/About"
// import AboutCard from './About/AboutCard'


import Home from './Home/Home'
import Projects from './Projects/Projects'



const Main = () => {
  return (
    <div>
        <Home/>
        <About/>
      
        <Projects/>
        <Contact/>
        
      
    </div>
  )
}

export default Main