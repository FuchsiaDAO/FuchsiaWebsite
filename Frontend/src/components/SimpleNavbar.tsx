import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'What We Do', path: '/features' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Launchpad', path: '/launchpad' },
    { name: 'Treasury', path: '/treasury' },
    { name: 'Governance', path: '/governance' },
    { name: 'Community', path: '/community' },
    { name: 'Docs', path: '/docs' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-bg/90 backdrop-blur-md border-b border-fuchsia-primary/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-londrina font-bold text-xl bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">
              Fuchsia DAO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-londrina font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-fuchsia-primary'
                    : 'text-gray-300 hover:text-fuchsia-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/launchpad"
              className="px-6 py-2 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-primary/50"
            >
              Launch DAO
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-fuchsia-primary transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="py-4 space-y-4 border-t border-fuchsia-primary/20">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-londrina font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-fuchsia-primary'
                      : 'text-gray-300 hover:text-fuchsia-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/launchpad"
                onClick={() => setIsOpen(false)}
                className="inline-block px-6 py-2 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300"
              >
                Launch DAO
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SimpleNavbar;
