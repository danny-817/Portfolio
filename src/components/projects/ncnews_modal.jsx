export default function NcNewsModal ({closeModal, openModal, ref2, inView2, modals, setIsModalOpen}){
return (
    <div className="project animation-container">
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
                <div className="logo-box">
                    <img src="../src/assets/NC-News/html5_logo.svg" alt="html5 logo" className="icon icon-opacity logo-colour"/> 
                    <img src="../src/assets/NC-News/css3_logo.svg" alt="CSS3 logo" className="icon icon-opacity logo-colour"/>                       
                    <img src="../src/assets/NC-News/javascript_logo.svg" alt="Javascript logo" className="icon icon-opacity logo-colour" />
                    <img src="../src/assets/NC-News/node.js_logo.svg" alt="Node JS logo" className="icon icon-opacity logo-colour" />
                    <img src="../src/assets/NC-News/react_logo.svg" alt="React logo" className="icon icon-opacity logo-colour" />
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
)




}