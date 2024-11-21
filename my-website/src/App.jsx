import Navigation from "./Navbarfolder/navbar.jsx";
import Maincontent from "./Navbarfolder/Hero/hero.jsx";
import About from "./containers/Aboutme/Aboutme.jsx";
import Skills from "./containers/Skills/Skills.jsx";
import Experience from "./containers/Experience/MyExperience.jsx";
//import Particles from "@tsparticles/react";
//import {loadFull} from "tsparticles";
//import Particlesform from "./containers/utils/Particles.js";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Maincontent/>
      <About/>
      <Skills/>
      <Experience/>
    </div>
  
  );
}

export default App;
