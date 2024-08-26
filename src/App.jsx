import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import TechnologiesAndProjects from './components/TechnologiesAndProjects';
import Contact from './components/Contact';
import Softskills from './components/SoftSkills';


function App() {
  const MainElement = () => {
    return (
        <div className='h-screen w-screen bg-light  overflow-x-hidden'>
          <Navbar />
          <Main />
          <About />
          <TechnologiesAndProjects />
          <Softskills />
          <Contact />
        </div>
    )
  }
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainElement />} />
      </Routes>
    </Router>
  )
}

export default App
