import "./productList.css"
import Product from "../product/Product";
import {products} from "../../data";

const ProductList = () => {
  return (
    <div className="pl" id="project">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire...</h1>
        <p className="pl-desc">
          These are some of my works, but it doesn't mean, that's my limit...
        </p>
      </div>
      <div className="pl-list">
        {
          products.map(item => (
            <Product key={item.id} img={item.img} link={item.link}/>
          ))
        }
      </div>
    </div>
  );
}
 
export default ProductList;