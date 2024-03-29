import React from "react";
import Home from "../sections/Home";
import Services from "../sections/Services";
import Work from "../sections/Work";
import About from "../sections/About";
import Reviews from "../sections/Reviews";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import Footer from "./Footer";


function Main() {
  return (
    <>
      <main id="content-wrapper">
        <Home/>
        <Services/>
        <Work/>
        <About/>
        <Reviews/>
        <Blog/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
};

export default Main;
