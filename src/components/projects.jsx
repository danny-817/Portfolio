import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container w-100 h-100 border border-dark">
      <h1 className="">Projects</h1>
      <div className="container border container  ">
        <div className=" project-enter">
          <h2>SnackTrack</h2>

          <Link
            to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners"
            className=""
          >
            <img
              className="thumbnail "
              src="src/assets/snacktrack.png
"
              alt="placeholder"
            />
          </Link>

          <p>
            GitHub:
            <a href="https://github.com/danny-817/snacktrack">
              Insert Link Here!
            </a>
          </p>
        </div>
        <div className="border px-4  text-center">
          <h2>NC News</h2>
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
            <img
              className="thumbnail align-self-center justify-content-center"
              src="http://via.placeholder.com/640x360
"
              alt="placeholder"
            />
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sit
          </p>
          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
        <div className="border px-4  text-center">
          <h2>NC News API</h2>
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
            <img
              className="thumbnail align-self-center justify-content-center"
              src="http://via.placeholder.com/640x360
"
              alt="placeholder"
            />
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sit
          </p>
          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
      </div>
      {/* carousel start!!!!!!!!! */}
      {/* <div className="container">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-slide   "
          data-bs-theme="dark"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active  "
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img
                src="./src/assets/snacktrack-resized.jpg"
                className="d-block mx-auto w-100 opacity-25 image-fluid border border-dark"
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block pe-none">
                <h5 className="display-1 ">SnackTrack</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              // tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-light"
                      id="staticBackdropLabel"
                    >
                      SnackTrack
                    </h1>

                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="text-light px-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque, atque recusandae! Cumque, assumenda accusamus,
                      delectus ratione ex ut exercitationem, architecto sequi
                      similique nobis quos excepturi deserunt accusantium
                      quaerat earum? Perferendis?
                    </p>
                  </div>
                  <div className="modal-footer">
                    <a href="https://snacktrack.vercel.app/" target="_blank">
                      <button type="button" className="btn btn-info text-dark">
                        To SnackTrack
                      </button>
                    </a>
                    <a
                      href="https://github.com/danny-817/snacktrack"
                      target="_blank"
                    >
                      <button type="button" className="btn btn-info text-dark">
                        GitHub repo
                      </button>
                    </a>

                    
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                
                src="./src/assets/snacktrack-resized.jpg"
                className="d-block mx-auto w-100 opacity-25 image-fluid border border-dark"
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="display-1">NCws</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src="src/assets/ncnews-api-resized.jpg"
                className="d-block w-100 opacity-25 image-fluid border border-dark"
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="display-1">NCews API</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}
