import "./intro.css";

const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Logesh</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer
              </div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime in quam eum. Ratione ipsam incidunt, beatae est necessitatibus eligendi.          
          </p>
          <div className="i-icon-wrapper">
            <a href="https://www.instagram.com/logesh_ms_/" className="i-icon-links" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/Logesh-A" className="i-icon-links" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/logeshwaran7" className="i-icon-links" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-wrapper">
          <div className="profile"></div>
        </div>
      </div>
    </div>
  );
}
 
export default Intro;