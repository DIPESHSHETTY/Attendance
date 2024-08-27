import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Contact from './Contact';
import Counters from "./Counters";
import Footer from "./Footer";
import '../Style.css';
import '../contact.css'



export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Header />
        <Services />
        <Aboutus />
        <Counters />
        <Contact />
        <Footer />

      </BrowserRouter>


    </div>
  )
}
