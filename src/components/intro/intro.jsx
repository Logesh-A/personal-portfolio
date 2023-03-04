import "./intro.css";
import man from "../../image/man.png"
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Logesh</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime in quam eum. Ratione ipsam incidunt, beatae est necessitatibus eligendi.          
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-wrapper">
          <div className="i-bg"></div>
          <img src={man} alt="fghj" className="i-img" />
        </div>
      </div>
    </div>
  );
}
 
export default Intro;