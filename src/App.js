import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <Appbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
