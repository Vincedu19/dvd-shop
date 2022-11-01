import Home from "./pages/Home/Page/Home";
import Footer from "./shared/components/Footer/Footer";
import MainNavigation from "./shared/components/Header/MainNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import ProductDetails from "./pages/Product/Page/ProductDetails";


function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:pid" element={<ProductDetails/>} />
          <Route path="*" element={<Navigate replace to="/"/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
