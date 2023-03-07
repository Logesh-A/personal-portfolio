import "./footer.css";

const Footer = () => {
  return (
    <div className="f">
      <div className="f-container">
        <p className="f-title">Logesh</p>

        <ul className="f-list">
          <li className="f-link">
            <a href="#about">About</a>
          </li>
          <li className="f-link">
            <a href="#project">Portfolio</a>
          </li>
          <li className="f-link">
            <a href="#contact">Contacts</a>
          </li>
        </ul>

        <div className="f-social">
          <div className="f-social-link">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/logesh_ms_/"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
          <div className="f-social-link">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/logesh.msd.9"><i class="fa-brands fa-square-facebook"></i></a>
          </div>
          <div className="f-social-link">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/logeshwaran7"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

        <span className="f-copy">
          &#169; logesh. All rights reserved
        </span>
      </div>
    </div>
  );
}
 
export default Footer;