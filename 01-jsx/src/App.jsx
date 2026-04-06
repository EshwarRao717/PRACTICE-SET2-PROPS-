
import ProductDetails from "./Compnents/ProductDetails";


function App() {
  const productData = {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics"
  };

  return (
    <div>
    <ProductDetails product={productData}/>
    </div>
  );
}

export default App;