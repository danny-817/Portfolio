import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

export default function Projects() {
  const [visibleThumbnails, setVisibleThumbnails] = useState([]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleThumbnails((prevVisible) => [...prevVisible, entry.target]);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust this threshold as needed
  });

  const thumbnailRefs = useRef([]);

  useEffect(() => {
    thumbnailRefs.current.forEach((thumbnailRef) => {
      observer.observe(thumbnailRef);
    });

    return () => {
      thumbnailRefs.current.forEach((thumbnailRef) => {
        observer.unobserve(thumbnailRef);
      });
    };
  }, [thumbnailRefs, observer]);
  return (
    <div className=" ">
      <h1 className="title neon-glow-blue">Projects</h1>
      <div className="projects-container ">
        <div className="project">
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
            <h2 className="project-title neon-glow-blue">SnackTrack</h2>

            <img
              className={`thumbnail box-shadow  ${
                visibleThumbnails.includes(thumbnailRefs.current[0])
                  ? "visible"
                  : ""
              }`}
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
        <div className="project">
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
            <h2 className="project-title neon-glow-blue ">NC News</h2>
            <img
              className="thumbnail box-shadow animation "
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
            <h2 className="project-title neon-glow-blue">NC News API</h2>
            <img
              className="thumbnail box-shadow animation"
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
