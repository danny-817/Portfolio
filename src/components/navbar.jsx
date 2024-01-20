export default function Navbar() {
  return (
    <div className="navbar">
      {/* <h2>Footer</h2> */}
      {/* <a
        href="https://www.flaticon.com/free-icons/files-and-folders"
        title="files and folders icons"
      >
        Files and folders icons created by Payungkead - Flaticon
      </a> */}
      <div className="button " tabIndex="1">
        {/* <button className="button">Test</button> */}
        <a className="neon-glow-blue button-text " href="#about">
          Top
        </a>
      </div>
      <div className="button" tabIndex="1">
        <a className="neon-glow-blue button-text" href="#projects">
          Projects
        </a>
      </div>
      <div className="button" tabIndex="1">
        <a className="neon-glow-blue button-text " href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}
