import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Header from './Components/Header';
import Products from './Components/Products';
import Contact from "./Components/Contact";
import About from './Components/About';



function App() {
  return(
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Products' element={<Products />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
    </div>   
  );
}

export default App;
