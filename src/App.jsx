import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import OpenAc from "../OpenAc";
import NavBar from "../NavBar";
import HomePage from "./Landing_page/Home/HomePage";
import SignUp from "./Landing_page/SignUp/SignUp";
import AboutPage from "./Landing_page/About/AboutPage";
import ProductPage from "./Landing_page/Products/ProductPage";
import PricingPage from "./Landing_page/Pricing/PricingPage";
import SupportPage from "./Landing_page/Support/SupportPage";
import NotFound from "./Landing_page/NotFound";
import Footer from "../Footer";
// import Password from "../../Password";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        {/* <OpenAc /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
