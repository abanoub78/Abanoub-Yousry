import './App.css';
import Header from './Components/Header';
import Home from './Components/home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
