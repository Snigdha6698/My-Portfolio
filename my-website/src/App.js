
import {Route, Routes} from 'react-router-dom';
import About from './containers/About.jsx';
import Home from './containers/Home.jsx';
import Contact from './containers/Contact.jsx';
import Projects from './containers/Projects.jsx';
import Skills from './containers/Skills.jsx';
import Navigation from "./components/navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/About' element={<About/>}/>
        <Route index path='/Contact' element={<Contact/>}/>
        <Route index path='/Home' element={<Home/>}/>
        <Route index path='/Projects' element={<Projects/>}/>
        <Route index path ='/Skills' element={<Skills/>}/>

          </Routes>
    </div>
  
  );
}

export default App;
