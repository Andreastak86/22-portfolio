import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testemonials from "./components/testemonials/Testemonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Insta from "./components/instagram/instagram";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testemonials />
      <Insta />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
