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
        <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi in neque culpa fugiat officiis asperiores optio tempora?
        </p>
        <p className="a-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque deserunt necessitatibus cumque unde quod adipisci magni dolorem, aliquam sit quas qui blanditiis ex rem reiciendis eius ea delectus? Magnam, nihil molestiae. Corporis at est quis beatae illo, harum id sed!
        </p>
        <a href={resume} download="Resume" className="resBtn"><div className="download">Download CV<i class="fa-solid fa-file-arrow-down"></i></div></a>
      </div>
    </div>
  );
}
 
export default About;