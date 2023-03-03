import "./about.css"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" 
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
      </div>
    </div>
  );
}
 
export default About;