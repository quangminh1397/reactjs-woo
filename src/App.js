import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import ShopComponent from "./component/shop/ShopComponent";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ShopComponent />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
