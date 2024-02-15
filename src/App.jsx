import { useState } from "react";

import About from "./components/about";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Extras from "./components/extras";
import Bio from "./components/bio";

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
			<div className="" id="extras">
				<Extras />
			</div>
		</main>
	);
}

export default App;
