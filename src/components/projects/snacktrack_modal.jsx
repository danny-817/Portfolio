import logoFiles from "../../assets/Snacktrack/logos"

// console.log(testFiles.htmlLogo.svg)

export default function SnackTrackModal ({closeModal, openModal, ref1, inView1, modals, setIsModalOpen}){
    return (
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
                team of 4 other graduates. The idea behind our app is that it
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
              {logoFiles.map((logo)=>{
                
                return (
                  <img src={logo.svg} alt={logo.altText} className="icon icon-opacity logo-colour" />

                )
              })
              
              }
              </div>
              {/* <div className="logo-box">
                <img src="../src/assets/Snacktrack/html5_logo.svg" alt="html logo" className="icon icon-opacity logo-colour"/>            
                <img src="../src/assets/Snacktrack/nextjs_logo.svg" alt="Next js logo" className="icon icon-opacity logo-colour " />
                <img src="../src/assets/Snacktrack/javascript_logo.svg" alt="" className="icon icon-opacity logo-colour" />
                <img src="../src/assets/Snacktrack/mongodb_logo.svg" alt="" className="icon icon-opacity logo-colour" />
                <img src="../src/assets/Snacktrack/nodejs_logo.svg" alt="" className="icon icon-opacity logo-colour" />
                <img src="../src/assets/Snacktrack/bulma_logo.svg" alt="" className="icon icon-opacity logo-colour" />
                <img src="../src/assets/Snacktrack/expressjs_logo.svg" alt="" className="icon icon-opacity logo-colour" />
                <img src="../src/assets/Snacktrack/jest_logo.svg" alt="" className="icon icon-opacity logo-colour" />


              </div> */}
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
    )
}

