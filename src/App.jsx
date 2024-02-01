import { useState } from "react";

import About from "./components/about";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Contact from "./components/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
      <main className="lines">
          <div className="" id="navbar">
            <Navbar />
          </div>         
          <div className="" id="about" dir="ltr">
            <About />
          </div>
          <div className="projects-page  " id="projects">
            <Projects />
          </div>
          <div className="" id="contact" >
            <Contact />
          </div>
      </main>   
    
  );
}

export default App;
