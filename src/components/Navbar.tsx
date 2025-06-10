import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu(); // Close on route change
  }, [location]);

  return (
    <header
    className={`fixed w-full z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-white shadow-sm py-2 border-gray-200' : 'bg-transparent py-4 border-transparent'
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex justify-between items-center">
      {/* Logo & Title */}
      <NavLink to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-24 object-contain mt-5"
        />
        <span className="text-xl md:text-2xl font-bold text-gray-800 leading-none">
          ALLIED INFRA SOLUTIONS
        </span>
      </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['/', '/about', '/projects', '/contact'].map((path, index) => {
              const label = ['Home', 'About Us', 'Projects', 'Contact Us'][index];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-blue-600 font-medium transition duration-200 ${
                      isActive ? 'text-blue-600 font-semibold' : ''
                    }`
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-white shadow-md rounded-lg">
            <div className="flex flex-col space-y-2 py-4 px-4">
              {['/', '/about', '/projects', '/contact'].map((path, index) => {
                const label = ['Home', 'About Us', 'Projects', 'Contact Us'][index];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block text-gray-700 font-medium px-2 py-2 rounded hover:bg-blue-50 hover:text-blue-600 transition ${
                        isActive ? 'text-blue-600 font-semibold' : ''
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
