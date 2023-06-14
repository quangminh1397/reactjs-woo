import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import ShopComponent from "./component/shop/ShopComponent";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SingleProduct from "./component/products/SingleProduct";
import CartScreen from "./component/cart/CartScreen";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ShopComponent />} />
          <Route path="/products/:slug" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
