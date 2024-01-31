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
        {/* <div className="project animation-container">
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
                    <a className="modal-link" href="https://github.com/danny-817/snacktrack" target="_blank">
                      GitHub Repo
                    </a>
                  </li>
                </ul>
                <div className="logo-box">
                  <img src="../src/assets/Snacktrack/icons8-html.svg" alt="html logo" className="icon icon-opacity logo-colour"/>            
                  <img src="../src/assets/Snacktrack/nextjs-original-wordmark.svg" alt="Next js logo" className="icon icon-opacity logo-colour " />
                  <img src="../src/assets/Snacktrack/JavaScript_logo_2.svg" alt="" className="icon icon-opacity logo-colour" />
                  <img src="../src/assets/Snacktrack/MongoDB_logo.svg" alt="" className="icon icon-opacity logo-colour" />
                  <img src="../src/assets/Snacktrack/Node.js_logo.svg" alt="" className="icon icon-opacity logo-colour" />
                  <img src="../src/assets/Snacktrack/Bulma Logo Black.svg" alt="" className="icon icon-opacity logo-colour" />
                  <img src="../src/assets/Snacktrack/expressjs-ar21.svg" alt="" className="icon icon-opacity logo-colour" />
                  <img src="../src/assets/Snacktrack/jest.svg" alt="" className="icon icon-opacity logo-colour" />


                </div>
                <p
                  onClick={closeModal(0)}
                  className="modal-close neon-glow-blue"
                >
                  Return
                </p>
              </div>
            </div>
          )}
        </div> */}
        <NcNewsModal   closeModal={closeModal} openModal={openModal} ref2={ref2} inView2={inView2} modals={modals} setIsModalOpen={setIsModalOpen}  />
        {/* <div className="project animation-container">
          <a onClick={openModal(1)}>
            <h2 ref={ref2} className="project-title neon-glow-blue ">
              NC News
            </h2>
            <img
              className={`thumbnail box-shadow
            ${inView2 ? `animated-image-on` : `animated-image-off`} `}
              src="src/assets/nc-news thumbnail.png"
              alt="placeholder"
            />
          </a>

          {modals[1] && (
            <div className="modal">
              <div className="modal-content">
                <h1 className="neon-glow-blue">NC News</h1>
                <p>
                  NC News was the result of the frontend solo project I did on the Northcoders bootcamp and was designed to work with the corresponding backend API I built. It's a simple news article site that can display the articles according to the limited subjects we had access to as well as allow users to log in, make comments on articles and give them a "thumbs up" vote and if the user had already voted for the article it would allow them to remove the vote. It was built using Javascript, React, React Router and Axios.
                  <br />
                  <br />
                  The site currently isn't hosted but I plan to revisit this project in the future and host it.
                </p>
                <ul className="modal-list">
                  
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
        </div> */}
        <NcNewsApiModal closeModal={closeModal} openModal={openModal} ref3={ref3} inView3={inView3} modals={modals} setIsModalOpen={setIsModalOpen} />
        {/* <div className="project animation-container">
          <a onClick={openModal(2)}>
            <h2 ref={ref3} className="project-title neon-glow-blue">
              NC News API
            </h2>
            <img
              className={`thumbnail box-shadow
            ${inView3 ? `animated-image-on` : `animated-image-off`} `}
              src="src/assets/nc-news API thumbnail.png "
              alt="placeholder"
            />
          </a>
          {modals[2] && (
            <div className="modal">
              <div className="modal-content">
                <h1 className="neon-glow-blue">NC News API</h1>
                <p>
                  This was the first solo project I completed on the bootcamp. It's an API to be used by the associated frontend site. Going to the site, you will be presented with the available endpoints, however, depending on your browser setting, this may appear as JSON format or as a large block of text. This was built using Javascript and Express and fully followed TDD (test driven development) practices utilising Jest, Jest Extended and Supertest.
                </p>
                <ul className="modal-list">
                <li>
                    <a className="modal-link" href="https://nc-news-api-88m2.onrender.com/api/" target="_blank">Hosted API</a></li>
                  <li>
                    <a className="modal-link" href="https://github.com/danny-817/nc-news-api" target="_blank">Github Repo</a></li>
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
        </div> */}
      </div>
    </div>
  );
}
