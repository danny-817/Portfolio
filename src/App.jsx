import About from "./components/about";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import Extras from "./components/extras";

function App() {
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
