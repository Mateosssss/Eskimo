import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Flavors from './components/Flavors';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Flavors />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
