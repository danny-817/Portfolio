import { useState } from "react";

import "./App.css";
import Footer from "./components/footer";
import About from "./components/about";
import Projects from "./components/projects";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="">
        <main className="">
          <div className="" id="about" dir="ltr">
            <About />
          </div>
          {/* <div className="fade-to-black full-page"></div> */}

          {/* <Navbar id="navbar" className="w-50" /> */}
          <div className="" id="projects">
            <Projects />
          </div>
          <div className="" id="footer">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
