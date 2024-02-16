import logos from "../../assets/Portfolio/logos";

export default function Portfolio({
	closeModal,
	openModal,
	ref4,
	inView4,
	modals,
}) {
	return (
		<div className="project animation-container">
			<div onClick={openModal(3)} className="make-invisible">
				<h2
					ref={ref4}
					className="project-title neon-glow-blue invisible"
				>
					Personal Portfolio
				</h2>
				<img
					className={`thumbnail box-shadow
            ${inView4 ? `animated-image-on` : `animated-image-off`} `}
					src="src/assets/portfolio thumbnail.png "
					alt="placeholder"
				/>
			</div>
			{modals[3] && (
				<div className="modal">
					<div className="modal-content">
						<h1 className="neon-glow-blue">My Portfolio</h1>
						<p className="project-description">
							Of course, I had to build my own portfolio myself! I
							started with an idea for what I wanted. I was
							inspired by the cyberpunk sub-genre of science
							fiction and while I could have really rolled with
							this and made it exponentially more complicated than
							it currently is, I needed to balance this with
							reality and make it achievable. I originally decided
							to use Bootstrap for styling to try something new
							but quickly decided against this as I saw it as a
							great opportunity to have a bit of a deep dive into
							CSS.
						</p>
						<ul className="modal-list"></ul>
						<div className="logo-box">
							{logos.map((logo) => {
								return (
									<img
										src={logo.svg}
										alt={logo.altText}
										className="icon icon-opacity logo-colour"
									/>
								);
							})}
						</div>

						<p
							onClick={closeModal(3)}
							className="modal-close neon-glow-blue"
						>
							Close{" "}
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
