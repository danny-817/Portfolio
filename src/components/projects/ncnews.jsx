/** @format */

import logos from "../../assets/NC-News/logos";

export default function NcNews({
	closeModal,
	openModal,
	ref2,
	inView2,
	modals,
}) {
	return (
		<div className="project animation-container">
			<div onClick={openModal(1)} className="make-invisible">
				<h2
					ref={ref2}
					className="project-title neon-glow-blue invisible"
				>
					NC News
				</h2>
				<img
					className={`thumbnail box-shadow
            ${inView2 ? `animated-image-on` : `animated-image-off`} `}
					src="src/assets/nc-news thumbnail.png"
					alt="placeholder"
				/>
			</div>

			{modals[1] && (
				<div className="modal">
					<div className="modal-content">
						<h1 className="neon-glow-blue">NC News</h1>
						<p className="project-description">
							NC News was the result of the frontend solo project
							I did on the Northcoders bootcamp and was designed
							to work with the corresponding backend API I built.
							It's a simple news article site that can display the
							articles according to the limited subjects we had
							access to as well as allow users to log in, make
							comments on articles and give them a "thumbs up"
							vote and if the user had already voted for the
							article it would allow them to remove the vote. It
							was built using Javascript, React, React Router and
							Axios.
							<br />
							<br />
							The site currently isn't hosted but I plan to
							revisit this project in the future and host it.
						</p>
						<ul className="modal-list">
							<li>
								<a
									className="modal-link"
									href="https://github.com/danny-817/nc-news/tree/main"
									target="_blank"
								>
									Github Repo
								</a>
							</li>
						</ul>
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
							onClick={closeModal(1)}
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
