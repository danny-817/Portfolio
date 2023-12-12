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
      <div className="button " tabindex="0">
        {/* <button className="button">Test</button> */}
        <p className="neon-glow-blue button-text ">Top</p>
      </div>
      <div className="button" tabindex="0">
        <p className="neon-glow-blue button-text ">Projects</p>
      </div>
      <div className="button" tabindex="0">
        <p className="neon-glow-blue button-text ">CV</p>
      </div>
    </div>
  );
}
