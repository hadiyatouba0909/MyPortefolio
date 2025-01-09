import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

function Navbar({ isDarkMode, setIsDarkMode }) {
  const location = useLocation();
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-gradient-custom p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">MyPortefolio</Link>
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-300 ${
                isActiveRoute(link.path)
                  ? "text-black font-medium"
                  : "text-white hover:text-opacity-80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-opacity-80"
          >
            <FaLinkedin size={24} />
          </a>

          <button 
            onClick={toggleTheme} 
            className="text-white hover:text-opacity-80 p-1"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;