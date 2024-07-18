import './App.scss';
import { useEffect, useState } from "react";
import {Routes, Route, useLocation} from 'react-router-dom'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Navbar from './components/navBar';
import particles from './utils.js/particles'

function App() {

  const location = useLocation();
  const renderParticlesInHomePage = location.pathname === '/';
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      
      {/* paticles js */}
      if (init) { renderParticlesInHomePage && (
      <Particles id="tsparticles" options={particles} />
    )}

      {/* navbar */}
      <Navbar/>

      {/* main page content */}
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
      

    </div>
  );
}

export default App;
