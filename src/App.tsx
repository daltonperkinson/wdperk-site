import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Professional from './components/Professional';
import Creative from './components/Creative';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Professional />
      <Creative />
      <Contact />
    </div>
  );
}

export default App;
