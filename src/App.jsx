import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import OpenAc from "../OpenAc";
import NavBar from "./components/NavBar";
import HomePage from "./LandingPage/Home/HomePage";
import SignUp from "./LandingPage/SignUp/SignUp";
import AboutPage from "./LandingPage/About/AboutPage";
import ProductPage from "./LandingPage/Products/ProductPage";
import PricingPage from "./LandingPage/Pricing/PricingPage";
import SupportPage from "./LandingPage/Support/SupportPage";
import NotFound from "./LandingPage/NotFound";
import Footer from "./components/Footer";
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
