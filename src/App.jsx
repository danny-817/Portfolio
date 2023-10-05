import { useState } from 'react'

import './App.css'
import Footer from './components/footer'
import About from './components/about'
import Projects from './components/projects'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar id="navbar"/>
    <div className='body-container'><body>
    <div  >
      <h1 className='' >Daniel Halsall</h1>
    </div>
      
    <div className='container smooth-scroll' id="about " >
      <About />
    </div>

    <div className='container smooth-scroll' id="projects">
    <Projects />
    </div>
<div  className='container smooth-scroll' id="footer"><Footer /></div>
    </body></div>
    
    
    
      
    </>
  )
}

export default App
