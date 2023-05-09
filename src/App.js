
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from './component/Footer';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Switch>
        <Route exact path="/" component={Navbar} />
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/footer" component={Footer} />
  </Switch> */}
   
      <Navbar/>
      <Home/>
      <Products/>
      <Footer/>
    
    </>
  );
}

export default App;
