import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./Component/Navbar.jsx";
import Hero from "./Component/Hero.jsx";
import Cocktails from "./Component/Cocktails.jsx";
import About from "./Component/About.jsx";
import Art from "./Component/Art.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default App;
