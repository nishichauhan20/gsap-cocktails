import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Component/Navbar.jsx";
import Hero from "./Component/Hero.jsx";
import Cocktails from "./Component/Cocktails.jsx";
import About from "./Component/About.jsx";
import Art from "./Component/Art.jsx";
import Menu from "./Component/Menu.jsx";
import Contact from "./Component/Contact.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
