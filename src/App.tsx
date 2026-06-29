import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-secondary text-primary font-sans">
      <Navbar />
      <Hero />
      <Curriculum />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
