import "./about.css"
import aboutPic from "../../image/IMG_1318-01.jpeg"
import resume from "./resume.pdf";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
            src= { aboutPic }
            alt="" 
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Name : Logeshwaran A <br />Age : 20
        </p>
        <p className="a-desc">A very passionate B.E Computer Science graduate who is seeking for an opportunity to grow and I have worked in bunch of projects. I am more intrested in developing attractive designs and functional websites. My strength in DSA and work experience in React JS highlights me more.</p>
        <a href={resume} download="Resume" className="resBtn"><div className="download">Download CV<i class="fa-solid fa-file-arrow-down"></i></div></a>
      </div>
    </div>
  );
}
 
export default About;