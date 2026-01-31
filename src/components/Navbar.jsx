import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    toggleDarkMode();
  };

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/skills", label: "Compétences" },
    { path: "/projects", label: "Projets" },
    { path: "/contact", label: "Contact" }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.1,
      color: "#EC4899",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 }
    }
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-white/10 dark:bg-dark-100/80 backdrop-blur-xl shadow-lg shadow-purple-500/10' 
            : 'py-5 bg-transparent'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-custom flex items-center justify-center"
                animate={{ 
                  boxShadow: ['0 0 20px rgba(139, 92, 246, 0.5)', '0 0 40px rgba(236, 72, 153, 0.5)', '0 0 20px rgba(139, 92, 246, 0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white font-bold text-xl">H</span>
              </motion.div>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Hadiyatou<span className="text-gradient">.dev</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Link
                  to={link.path}
                  className={`relative font-medium transition-all duration-300 ${
                    isActiveRoute(link.path)
                      ? "text-transparent bg-clip-text bg-gradient-custom"
                      : darkMode 
                        ? "text-gray-300 hover:text-white" 
                        : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                  {isActiveRoute(link.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-custom rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a 
              href="https://github.com/hadiyatouba0909" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`social-icon p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={22} />
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/hadiyatou-ba-a5742a247/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`social-icon p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={22} />
            </motion.a>

            <motion.button 
              onClick={toggleTheme} 
              className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-purple-500/20 text-purple-600'}`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BsSun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BsMoon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div 
              className={`absolute inset-0 ${darkMode ? 'bg-dark-100/95' : 'bg-white/95'} backdrop-blur-xl`}
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-semibold ${
                        isActiveRoute(link.path)
                          ? "text-transparent bg-clip-text bg-gradient-custom"
                          : darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="flex items-center gap-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button 
                    onClick={toggleTheme} 
                    className={`p-3 rounded-xl ${darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-purple-500/20 text-purple-600'}`}
                    whileTap={{ scale: 0.9 }}
                  >
                    {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;