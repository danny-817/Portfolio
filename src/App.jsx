import { useState } from "react";

import "./App.css";
import Footer from "./components/footer";
import About from "./components/about";
import Projects from "./components/projects";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar id="navbar" className="mh-50" />
      <div className="body-container">
        <main>
          <div>
            <h1 className="">Daniel Halsall</h1>
          </div>

          <div className="container smooth-scroll" id="about ">
            <br />
            <br />
            <About />
          </div>

          <div className="container smooth-scroll" id="projects">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Projects />
          </div>
          <div className="container smooth-scroll" id="footer">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
