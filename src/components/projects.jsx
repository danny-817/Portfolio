import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="container">
      <h1 className="display-1">Projects</h1>
      <div className="d-flex justify-content-around">
        <div>
          <h2>SnackTrack</h2>
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
            <img
              className="thumbnail"
              src="http://via.placeholder.com/640x360
"
              alt="placeholder"
            />
          </Link>
          <p>Description</p>
          <p>
            GitHub:<a href="">Insert Link Here!</a>
          </p>
        </div>
        <div>
          <h2>NC News</h2>
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
            <img
              className="thumbnail"
              src="http://via.placeholder.com/640x360
"
              alt="placeholder"
            />
          </Link>
          <p>Description</p>
        </div>
        <div>
          <h2>NC News API</h2>
          <Link to="https://www.cssscript.com/demo/cyberpunk-2077/#section-banners">
            <img
              className="thumbnail"
              src="http://via.placeholder.com/640x360
"
              alt="placeholder"
            />
          </Link>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}
