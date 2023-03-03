import "./intro.css";
import myPic from "../../image/myPic.jpg";
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
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="fghj" className="i-img" />
        </div>
      </div>
    </div>
  );
}
 
export default Intro;