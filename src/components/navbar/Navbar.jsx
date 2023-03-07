import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
      <nav className="n">
          <a href="index.html" id="logo">
            <span>Logesh</span>
          </a>
          <div className="nav-list-wrapper">
            <ul className={clicked ? "nav-list active" : "nav-list"}>
              <li className="nav-links"><a onClick={handleClick} href="#intro">Home</a></li>
              <li className="nav-links"><a onClick={handleClick} href="#about">About</a></li>
              <li className="nav-links"><a onClick={handleClick} href="#project">Portfolio</a></li>
              <li className="nav-links"><a onClick={handleClick} href="#contact">Contact</a></li>
            </ul>
          </div>

          <div id="mobile" onClick={handleClick}>
            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
      </nav>
  );
}
 
export default Navbar;