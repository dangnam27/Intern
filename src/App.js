import * as React from "react";
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from './component/Footer';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Routes, Route } from "react-router-dom";
import Introduce from "./component/Introduce";
import Product from "./component/Product";
import Tiles from "./component/products/Tiles";
import Header from "./component/Header"
function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/Home" element= {<Home/>}/>
          <Route path="/Introduce" element= {<Introduce/>}/>
          <Route path="/Product/:id" element= {<Product/>}/>
          <Route path="/Tiles" element= {<Tiles/>}/>

    </Routes>
    <Footer/> 
    </>
  );
}

export default App;
