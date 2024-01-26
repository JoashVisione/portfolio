import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='container'>
        <Home />
        <Navigation />
        <About />
        <Experiences />
        <Services />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
