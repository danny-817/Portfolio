import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SnackTrackModal from "./snacktrack_modal";
import NcNewsModal from "./ncnews_modal";
import NcNewsApiModal from "./ncnewsapi_modal";


export default function Projects() {
  const options = { rootMargin: "0px 0px -200px 0px " };
  const [ref1, inView1] = useInView(options);
  const [ref2, inView2] = useInView(options);
  const [ref3, inView3] = useInView(options);
  const [modals, setIsModalOpen] = useState([false, false, false]);

  const closeModal = (index) => () => {
    const updatedModals = [...modals];
    updatedModals[index] = false;
    setIsModalOpen(updatedModals);
  };
  const openModal = (index) => () => {
    const updatedModals = modals.map((_, i) => (i === index ? true : false));

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
        <SnackTrackModal closeModal={closeModal} openModal={openModal} ref1={ref1} inView1={inView1} modals={modals} setIsModalOpen={setIsModalOpen}   />       
        <NcNewsModal   closeModal={closeModal} openModal={openModal} ref2={ref2} inView2={inView2} modals={modals} setIsModalOpen={setIsModalOpen}  />        
        <NcNewsApiModal closeModal={closeModal} openModal={openModal} ref3={ref3} inView3={inView3} modals={modals} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
}
