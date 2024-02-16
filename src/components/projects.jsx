import { useState } from "react";
import { useInView } from "react-intersection-observer";
import SnackTrack from "./projects/snacktrack";
import NcNews from "./projects/ncnews";
import NcNewsApi from "./projects/ncnewsapi";
import Portfolio from "./projects/portfolio";

export default function Projects() {
	const options = { rootMargin: "0px 0px -200px 0px " };
	const [ref1, inView1] = useInView(options);
	const [ref2, inView2] = useInView(options);
	const [ref3, inView3] = useInView(options);
	const [ref4, inView4] = useInView(options);
	const [modals, setIsModalOpen] = useState([false, false, false, false]);

	const closeModal = (index) => () => {
		const updatedModals = [...modals];
		updatedModals[index] = false;
		setIsModalOpen(updatedModals);
	};
	const openModal = (index) => () => {
		const updatedModals = modals.map((_, i) =>
			i === index ? true : false
		);

		updatedModals.forEach((modal) => {
			modal = false;
		});
		updatedModals[index] = true;
		setIsModalOpen(updatedModals);
	};

	return (
		<div className=" " id="projects">
			<h1 className="title neon-glow-blue">Projects</h1>
			<div className="projects-container ">
				<SnackTrack
					closeModal={closeModal}
					openModal={openModal}
					ref1={ref1}
					inView1={inView1}
					modals={modals}
				/>
				<NcNews
					closeModal={closeModal}
					openModal={openModal}
					ref2={ref2}
					inView2={inView2}
					modals={modals}
				/>
				<NcNewsApi
					closeModal={closeModal}
					openModal={openModal}
					ref3={ref3}
					inView3={inView3}
					modals={modals}
				/>
				<Portfolio
					closeModal={closeModal}
					openModal={openModal}
					ref4={ref4}
					inView4={inView4}
					modals={modals}
				/>
			</div>
		</div>
	);
}
