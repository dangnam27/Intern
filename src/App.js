
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from './component/Footer';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Switch, Route } from "react-router-dom";
import Products from './component/Products';

function App() {
  return (
    <>
    <Navbar/>
    {/* <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
    </Switch> */}
      <Home/>
      <Products/>
      <Footer/>
    
    </>
  );
}

export default App;
