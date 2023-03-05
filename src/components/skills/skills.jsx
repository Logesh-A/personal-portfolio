import "./skills.css";

const Skills = () => {
  return (
    <div className="s" id="skills">
      <div className="s-texts">
        <h2 className="s-title">Skills</h2>
        <p className="s-desc">My technical level</p>
      </div>
      <div className="skill-container">
          <div className="card1 card">
            <div className="left-card in">
              <div className="skills grid-container">
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      HTML
                      <p className="desc">Intermediate</p>
                    </div>
                </div>
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      CSS
                      <p className="desc">Intermediate</p>
                    </div>
                </div>
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      Java Script
                      <p className="desc">Advanced</p>
                    </div>
                </div>
              </div>
              <div className="skills grid-container">
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      Bootstarp
                      <p className="desc">Intermediate</p>
                    </div>
                </div>
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      React JS
                      <p className="desc">Intermediate</p>
                    </div>
                </div>
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      Node JS
                      <p className="desc">Basics</p>
                    </div>
                </div>
              </div>
            </div>
          </div>


          <div className="card2 card">
            <div className="right-card in">
              <div className="skills grid-container">
                <div className="each grid-item">                  
                  <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="particular-content">
                      C
                      <p className="desc">Intermediate</p>
                  </div>
                </div>
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      Java
                      <p className="desc">Advanced</p>
                    </div>
                </div>
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      Python
                      <p className="desc">Intermediate</p>
                    </div>
                </div>
              </div>
              <div className="skills grid-container">
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      Firebase
                      <p className="desc">Basics</p>
                    </div>
                </div>
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      DSA
                      <p className="desc">Intermediate</p>
                    </div>
                </div>
                <div className="each grid-item">
                    <div className="particular">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="particular-content">
                      SQL
                      <p className="desc">Basics</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
 
export default Skills;
