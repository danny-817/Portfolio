import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const options = { rootMargin: "0px 0px -200px 0px " };
  const [ref1, inView1] = useInView(options);
  const [ref2, inView2] = useInView(options);
  const [ref3, inView3] = useInView(options);

  console.log(inView1, inView2, inView3);

  return (
    <div className=" ">
      <h1 className="title neon-glow-blue">Projects</h1>
      <div className="projects-container ">
        <div className="project animation-container">
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
            <h2 className="project-title neon-glow-blue" ref={ref1}>
              SnackTrack
            </h2>

            <img
              className={`thumbnail box-shadow
              ${inView1 ? `animated-image-on` : `animated-image-off`} `}
              src="src/assets/snacktrack.png"
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
        <div className="project">
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
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
          </Link>
          <div className="modal"></div>

          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
        <div className="project">
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
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
          </Link>

          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
