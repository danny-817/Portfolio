import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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

    // e.target.parentNode.parentNode.style.visibility = "hidden";
    // console.log(e.target.parentNode.parentNode.style.visibility);
  };
  const openModal = (index) => () => {
    const updatedModals = modals.map((_, i) => (i === index ? true : false));

    // const updatedModals = [...modals];
    updatedModals.forEach((modal) => {
      modal = false;
      console.log(modal, "each");
    });
    updatedModals[index] = true;
    setIsModalOpen(updatedModals);
  };

  return (
    <div className=" ">
      <h1 className="title neon-glow-blue">Projects</h1>
      <div className="projects-container ">
        <div className="project animation-container">
          <a onClick={openModal(0)}>
            <h2 className="project-title neon-glow-blue" ref={ref1}>
              SnackTrack
            </h2>

            <img
              className={`thumbnail box-shadow
              ${inView1 ? `animated-image-on` : `animated-image-off`} `}
              src="src/assets/snacktrack.png"
              alt="placeholder"
            />
          </a>
          {modals[0] && (
            <div className="modal">
              <div className="modal-content">
                <button onClick={closeModal(0)}>Close Modal and Return</button>
              </div>
            </div>
          )}
          <p>
            GitHub:
            <a href="https://github.com/danny-817/snacktrack">
              Insert Link Here!
            </a>
          </p>
        </div>
        <div className="project animation-container">
          <a onClick={openModal(1)}>
            <h2 ref={ref2} className="project-title neon-glow-blue ">
              NC News
            </h2>
            <img
              className={`thumbnail box-shadow
            ${inView2 ? `animated-image-on` : `animated-image-off`} `}
              src="http://via.placeholder.com/640x360
"
              alt="placeholder"
            />
          </a>

          {modals[1] && (
            <div className="modal">
              <div className="modal-content">
                <button onClick={closeModal(1)}>Close Modal and Return</button>
              </div>
            </div>
          )}

          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
        <div className="project animation-container">
          <a onClick={openModal(2)}>
            <h2 ref={ref3} className="project-title neon-glow-blue">
              NC News API
            </h2>
            <img
              className={`thumbnail box-shadow
            ${inView3 ? `animated-image-on` : `animated-image-off`} `}
              src="http://via.placeholder.com/640x360
"
              alt="placeholder"
            />
          </a>
          {modals[2] && (
            <div className="modal">
              <div className="modal-content">
                <button onClick={closeModal(2)}>Close Modal and Return</button>
              </div>
            </div>
          )}

          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
