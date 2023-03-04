import { ToastContainer } from "react-toastify";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/ProductList";
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
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
