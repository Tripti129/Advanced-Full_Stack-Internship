import "./ProductCard.css";
import {useState} from "react"
export default function ProductCard(props) {
  const [count,setCount]=useState(0);
  return (
    <div className="card">
      <div className="imageBox">
        <img
          src={props.image}
          alt="MacBook"
        />
      </div>

      <h3>
       {props.title}
      </h3>

      <div className="rating">
        <span>★★★★☆</span>
        <span className="count">36</span>
      </div>

      <p className="bought">{props.bought}</p>

      <div className="priceRow">
        <span className="off">-8%</span>
        <span className="price">{props.price}</span>
      </div>

      <p className="mrp">
        M.R.P: <del>{props.mrp}</del>
      </p>
   
<p><button onClick={()=>{props.updatequantity(props.id,-1)}}>-</button>Quantity :{props.quantity} <button onClick={()=>{props.updatequantity(props.id,1)}}>+</button></p>
<button onClick={()=>{props.add(props.id)}}>Add to cart</button>
      <p className="prime">✓prime FREE Delivery</p>
      <p className="date">{props.delivery}</p>
    </div>
  );
}