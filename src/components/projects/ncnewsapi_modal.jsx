export default function NcNewsApiModal ({closeModal, openModal, ref3, inView3, modals, setIsModalOpen}){

return (
<div className="project animation-container">
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
                <div className="logo-box">
                    <img src="../src/assets/NC-News-API/javascript_logo.svg" alt="Javascript logo" className="icon icon-opacity logo-colour" />
                    <img src="../src/assets/NC-News-API/nodejs_logo.svg" alt="Node JS logo" className="icon icon-opacity logo-colour" />
                    <img src="../src/assets/NC-News-API/expressjs_logo.svg" alt="Express JS logo" className="icon icon-opacity logo-colour" />
                    <img src="../src/assets/NC-News-API/jest_logo.svg" alt="" className="icon icon-opacity logo-colour" />

                </div>
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



)

}