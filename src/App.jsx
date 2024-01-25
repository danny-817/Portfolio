import { useState } from "react";

import About from "./components/about";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Contact from "./components/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="">
        <main className="">
          <div className="" id="navbar">
            <Navbar />
          </div>         
          <div className="" id="about" dir="ltr">
            <About />
          </div>
          <div className="projects-page lines " id="projects">
            <Projects />
          </div>
          <div id="contact" className="lines">
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
