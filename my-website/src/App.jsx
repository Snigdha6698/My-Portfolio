import Navigation from "./Navbarfolder/navbar.jsx";
import Maincontent from "./Navbarfolder/Hero/hero.jsx";
import About from "./containers/Aboutme/Aboutme.jsx";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Maincontent/>
      <About/>
    </div>
  
  );
}

export default App;
