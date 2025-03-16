import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain, Calculator, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Disclaimer from './pages/Disclaimer';
import Faqs from './pages/Faqs';

function App() {
  React.useEffect(() => {
    // Load the ad script
    const script = document.createElement('script');
    script.src = '//pl26134509.effectiveratecpm.com/c1ffca1c11adc6801ef8d233266d2b46/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/faqs" element={<Faqs />} />
          </Routes>
        </main>
        {/* Ad Banner */}
        <div className="w-full flex justify-center py-8">
          <div id="container-c1ffca1c11adc6801ef8d233266d2b46"></div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;