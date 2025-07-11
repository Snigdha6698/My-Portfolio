import Navigation from "./Navbarfolder/navbar.jsx";
import Maincontent from "./Navbarfolder/Hero/hero.jsx";
import About from "./containers/Aboutme/Aboutme.jsx";
import Skills from "./containers/Skills/Skills.jsx";
import Experience from "./containers/Experience/MyExperience.jsx";
import Contact from "./containers/Contact/Contact.jsx";
//import Footer from "./containers/footer/Footer.jsx";
import Education from "./containers/Education/Education.jsx";
import VisitorCount from "./VisitorCounter.jsx";


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
      <Education/>
      <Contact/>
      <VisitorCount/>
    </div>
  
  );
}

export default App;
