
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Products from './component/Products';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Home/>
      <Products/>
    </>
  );
}

export default App;
