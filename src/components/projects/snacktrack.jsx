import logoFiles from "../../assets/Snacktrack/logos";
import snackTrack from "../../assets/snacktrack.png";

export default function SnackTrack({
	closeModal,
	openModal,
	ref1,
	inView1,
	modals,
}) {
	return (
		<div className="project animation-container">
			<div onClick={openModal(0)} className="make-invisible">
				<h2
					className="project-title neon-glow-blue invisible"
					ref={ref1}
				>
					SnackTrack
				</h2>

				<img
					className={`thumbnail box-shadow
            ${inView1 ? `animated-image-on` : `animated-image-off`} `}
					src={snackTrack}
					alt="placeholder"
				/>
			</div>
			{modals[0] && (
				<div className="modal">
					<div className="modal-content">
						<h1 className="neon-glow-blue">SnackTrack</h1>
						<h2>"A community of food right on your doorstep"</h2>
						<br />
						<p className="project-description">
							This app was the culmination of my time on the
							NorthCoders bootcamp. It was designed and created
							collaboratively with a team of 4 other graduates.
							The idea behind our app is that it helps non
							permanent businesses (i.e food trucks and popup
							stalls) advertise their locations and goods by
							allowing them to provide their locations and menus
							to customers via the map.
						</p>
						<ul className="modal-list">
							<li>
								<a
									className="modal-link"
									href="https://northcoders.com/projects/sep-2023/snacktrack"
									target="_blank"
								>
									NorthCoders project page
								</a>
							</li>
							<li>
								<a
									className="modal-link"
									href="https://github.com/danny-817/snacktrack"
									target="_blank"
								>
									GitHub Repo
								</a>
							</li>
						</ul>
						<div className="logo-box">
							{logoFiles.map((logo) => {
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
							onClick={closeModal(0)}
							className="modal-close neon-glow-blue"
						>
							Close
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
