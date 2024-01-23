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
  };
  const openModal = (index) => () => {
    const updatedModals = modals.map((_, i) => (i === index ? true : false));

    // const updatedModals = [...modals];
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
                <h1 className="neon-glow-blue">SnackTrack</h1>
                <h2>"A community of food right on your doorstep"</h2>
                <br />
                <p>
                  This app was the culmination of my time on the NorthCoders
                  bootcamp. It was designed and created collaboratively with a
                  team of 4 other graduates.The idea behind our app is that it
                  helps non permanent businesses (i.e food trucks and popup
                  stalls) advertise their locations and goods by allowing them
                  to provide their locations and menus to customers via the map.
                </p>
                <ul className="modal-list">
                  <li>
                    <a className="modal-link"
                      href=
                        "https://northcoders.com/projects/sep-2023/snacktrack"                      
                      target="_blank"
                    >
                      NorthCoders project page
                    </a>
                  </li>
                  <li>
                    <a className="modal-link" href="https://github.com/danny-817/snacktrack" target="_blank"
>
                      GitHub Repo
                    </a>
                  </li>
                </ul>
                <p
                  onClick={closeModal(0)}
                  className="modal-close neon-glow-blue"
                >
                  Return
                </p>
              </div>
            </div>
          )}
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
                <h1 className="neon-glow-blue">NC News</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit consequuntur non quibusdam quasi expedita facere
                  omnis amet quia, exercitationem quo rerum, porro possimus.
                  Soluta quia iste impedit quod id cupiditate!
                </p>
                <ul className="modal-list">
                  <li>
                    <a className="modal-link" href="" target="_blank">Link 1</a></li>
                  <li>
                    <a className="modal-link" href="https://github.com/danny-817/nc-news/tree/main" target="_blank">Github Repo</a></li>
                </ul>
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
                <h1 className="neon-glow-blue">NC News API</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit consequuntur non quibusdam quasi expedita facere
                  omnis amet quia, exercitationem quo rerum, porro possimus.
                  Soluta quia iste impedit quod id cupiditate!
                </p>
                <ul className="modal-list">
                <li>
                    <a className="modal-link" href="" target="_blank">Link 1</a></li>
                  <li>
                    <a className="modal-link" href="" target="_blank">Link 2</a></li>
                </ul>
                <p
                  onClick={closeModal(2)}
                  className="modal-close neon-glow-blue"
                >
                  Close{" "}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
