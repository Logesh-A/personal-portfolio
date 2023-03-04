import "./toggle.css"
import sun from "../../image/sun.png";
import moon from "../../image/moon.png";

const Toggle = ({changeTheme}) => {
  const handleclick = (darkValue) => {
    changeTheme(darkValue);
    const dark = document.getElementById("d");
    const light = document.getElementById("l");
    if (darkValue) {
      dark.style.color = "white";
      dark.style.backgroundColor = "green";
      light.style.color = "green";
      light.style.backgroundColor = "white";
    } else {
      light.style.color = "white";
      light.style.backgroundColor = "green";
      dark.style.color = "green";
      dark.style.backgroundColor = "white";
    }
  }
  return (
     <div className="t">
        <div className="dark toggle" id="d"  onClick={() => handleclick(true)}>
          Dark 
          <img src={moon} alt="" />
        </div>
        <div className="light toggle" id="l" onClick={() => handleclick(false)}>
          Light
          <img src={sun} alt="" />
        </div>
     </div>
  );
}
 
export default Toggle;