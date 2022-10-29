import Home from "./pages/Home/Home";
import Footer from "./shared/components/Footer/Footer";
import MainNavigation from "./shared/components/Header/MainNavigation";
import {Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
