import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container border">
      <h1 className="">Projects</h1>
      {/* <div className="border container row ">
        <div className=" border px-4 col">
          <h2>SnackTrack</h2>
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
            cumque esse vero officiis eum eius ab itaque assumenda iste
            voluptatum cupiditate dolorum cum sunt vitae, nemo, reiciendis quas
            fugiat?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolor sit cumque esse vero officiis eum eius ab itaque assumenda
            iste voluptatum cupiditate dolorum cum sunt vitae, nemo, reiciendis
            quas fugiat?
          </p>
          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
        <div className="border px-4 col">
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
            cumque esse vero officiis eum eius ab itaque assumenda iste
            voluptatum cupiditate dolorum cum sunt vitae, nemo, reiciendis quas
            fugiat?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolor sit cumque esse vero officiis eum eius ab itaque assumenda
            iste voluptatum cupiditate dolorum cum sunt vitae, nemo, reiciendis
            quas fugiat?
          </p>
          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
        <div className="border px-4 col">
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
            cumque esse vero officiis eum eius ab itaque assumenda iste
            voluptatum cupiditate dolorum cum sunt vitae, nemo, reiciendis quas
            fugiat?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolor sit cumque esse vero officiis eum eius ab itaque assumenda
            iste voluptatum cupiditate dolorum cum sunt vitae, nemo, reiciendis
            quas fugiat?
          </p>
          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
      </div> */}
      <div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade "
          data-bs-theme="dark"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item active"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img
                src="./src/assets/snacktrack.png"
                className="d-block w-100 opacity-25"
                alt="..."
              ></img>
              <div class="carousel-caption d-none d-md-block pe-none">
                <h5 className="display-1 ">SnackTrack</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Understood
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="http://via.placeholder.com/640x360"
                className="d-block w-100 opacity-25"
                alt="..."
              ></img>
              <div class="carousel-caption d-none d-md-block">
                <h5 className="display-1">NCws</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="http://via.placeholder.com/640x360"
                className="d-block w-100 opacity-25"
                alt="..."
              ></img>
              <div class="carousel-caption d-none d-md-block">
                <h5 className="display-1">NCews API</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
