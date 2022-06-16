import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  
  Route
} from "react-router-dom";

import './App.css';
import DetailedCard from './components/DetailedCard';
import Nav from './components/nav';
import Home from './pages/home';
import Products from './pages/Products';
import MyCart from './pages/MyCart'
 import Registrations from './pages/signup'
import login from './pages/login'
import About from './components/about'

function App() {
  
  return (
    <Router>
       <div >
    
      <Nav />
      {/* routes */}
      <Routes>
   
     <Route path="/" element={ <Home/>} />
     <Route path="/products" element={ <Products/>} />
     <Route path="/detaiedCard" element={ <DetailedCard/>} />
     <Route path="/cart" element={ <MyCart/>} />
     <Route path="/signup" element={ <Registrations/>} />
      </Routes>

      <About/>


        </div>
    </Router>
  );
}

export default App;
