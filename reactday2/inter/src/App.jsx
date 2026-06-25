import Navbar from "./components/Navbar";
import Card from "./components/Card"
import ProductCard from "./components/Amazon";
import products from "./prodcut"
import { useState } from "react";
import Form from "./components/Form";
import Comp from "./components/Comp";
const App=()=>{
  const [product,setproduct]=useState(products)
  const [prod,setprod]=useState([]);
  const [showcart,setshow]=useState(false)
 
const add = (id) => {
  const pro = product.find((el) => el.id === id);
  if(prod.find((pr)=>pr.id===id)){

  }
  setprod([...prod, pro]);
  console.log(prod)
};
  const updatequantity=(id,op)=>{
    const pro=product.map((pr)=>{
      if(pr.id===id && pr.quantity<pr.stock){
        return {...pr,quantity:pr.quantity+op};
      }
      return pr;
    })
    setproduct(pro)
  }
  return(
    <>
    <Navbar cart={prod} setshow={setshow} show={showcart} />
  <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
     {showcart && (
  <div
    style={{
      position: "absolute",
      top: "50px",
      right: "10px",
      width: "320px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      padding: "12px",
      zIndex: 1000,
      maxHeight: "400px",
      overflowY: "auto",
    }}
  >
    <h3
      style={{
        margin: "0 0 10px 0",
        borderBottom: "1px solid #eee",
        paddingBottom: "8px",
      }}
    >
      🛒 Cart ({prod.length})
    </h3>

    {prod.length === 0 ? (
      <p style={{ textAlign: "center", color: "gray" }}>
        Cart is Empty
      </p>
    ) : (
      <>
        {prod.map((el, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "12px",
              borderBottom: "1px solid #f0f0f0",
              paddingBottom: "10px",
            }}
          >
            <img
              src={el.image}
              alt={el.title}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
              }}
            />

            <div style={{ flex: 1 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: "500",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {el.title}
              </p>

              <p
                style={{
                  margin: "5px 0 0 0",
                  color: "#16a34a",
                  fontWeight: "bold",
                }}
              >
                ₹{el.price}
              </p>
            </div>
          </div>
        ))}

        <button
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          View Cart
        </button>
      </>
    )}
  </div>
)}
      {product.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          rating={product.rating}
          reviews={product.reviews}
          bought={product.bought}
          discount={product.discount}
          price={product.price}
          mrp={product.mrp}
          quantity={product.quantity}
          deliveryDate={product.deliveryDate}
          updatequantity={updatequantity}
          id = {product.id}
          add={add}
        />
      ))}
    </div>
    {/* <Comp/> */}
    <Form/>
    </>
  )
}
export default App