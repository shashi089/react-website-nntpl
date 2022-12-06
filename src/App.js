import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';
import Appbar from './components/Appbar';
import Home from './components/Home';
import TopBrands from './components/TopBrands';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import OurBrands from './components/OurBrands';

function App() {
  return (
    <div className='App'>
      <Appbar />
      <Home />
      <TopBrands />
      <OurBrands />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
