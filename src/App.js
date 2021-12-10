import React,{useEffect} from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/pages/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./component/pages/Services";
import Portofolio from "./component/pages/Portofolio";
import Pricing from "./component/pages/Pricing";
import Contact from "./component/pages/Contact";
import About from "./component/pages/About";
import Team from "./component/pages/Team";
import Testimonial from "./component/pages/Testimonial";
import ScrolltoTop from "./component/ScrolltoTop";
import Lib from "./component/Lib";

function App() {

  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portofolio" element={<Portofolio />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="testimonial" element={<Testimonial />} />
      </Routes>
    <Footer/>
    <ScrolltoTop/>
    <Lib/>
    </div>
  );
}

export default App;
