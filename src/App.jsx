import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        {/* Background */}
        <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-500" />
        
        {/* Content */}
        <div className="relative z-10 min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/about" element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              } />
              <Route path="/skills" element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Skills />
                </motion.div>
              } />
              <Route path="/projects" element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Projects />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="container mx-auto px-6"
          >
            <div className="glass rounded-2xl py-6 px-8">
              <p className="dark:text-gray-400 text-gray-600">
                © {new Date().getFullYear()} <span className="text-gradient font-semibold">Hadiyatou BA</span>. 
                Tous droits réservés.
              </p>
            </div>
          </motion.div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
