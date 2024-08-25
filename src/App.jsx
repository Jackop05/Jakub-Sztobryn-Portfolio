import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import TechnologiesAndProjects from './components/TechnologiesAndProjects';
import Contact from './components/Contact';

function App() {
  

  return (
    <div className='h-screen w-screen bg-light  overflow-x-hidden'>
      <Navbar />
      <Main />
      <About />
      <TechnologiesAndProjects />
      <Contact />
    </div>
  )
}

export default App
