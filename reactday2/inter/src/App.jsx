import Navbar from "./components/Navbar";
import Card from "./components/Card"
import ProductCard from "./components/Amazon";
import products from "./prodcut"
const App=()=>{
  return(
    <>
    <Navbar/>
  <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
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
          deliveryDate={product.deliveryDate}
        />
      ))}
    </div>
    
    </>
  )
}
export default App