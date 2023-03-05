import { ToastContainer } from "react-toastify";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/skills";
import Toggle from "./components/toggle/Toggle";

function App() {
  const changeTheme = (darkValue) => {
    const whole = document.querySelector(".App");
    if (darkValue) {
      whole.style.color = "white";
      whole.style.backgroundColor = "#333";
    } else {
      whole.style.color = "#333";
      whole.style.backgroundColor = "white";
    }
  }

  return (
    <div className="App" style={{color: "black", backgroundColor:"white"}}>
      <ToastContainer />
      <Toggle changeTheme={changeTheme}/>
      <Intro />
      <About />
      <Skills/>
      <ProductList />
      <Contact />
      < Footer />
    </div>
  );
}

export default App;
