import "./productList.css"
import Product from "../product/Product";
import {products} from "../../data";

const ProductList = () => {
  return (
    <div className="pl" id="project">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire...</h1>
        <p className="pl-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt maxime rerum velit, harum aliquid, sint delectus perferendis, officiis esse quos aspernatur tenetur quasi impedit quo magni. Totam, omnis itaque.
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