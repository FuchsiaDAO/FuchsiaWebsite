import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Launchpad', path: '/launchpad' },
    { name: 'Treasury', path: '/treasury' },
    { name: 'Governance', path: '/governance' },
    { name: 'Community', path: '/community' },
    { name: 'Blog', path: '/blog' },
    { name: 'Docs', path: '/docs' },
  ];

  // Effect to prevent body scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-fuchsia-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">

            {/* Only Hamburger Menu Visible */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open main menu"
              aria-controls="main-menu"
              aria-expanded={isOpen}
              className="flex items-center justify-center w-12 h-10 bg-dark-bg/80 rounded-lg border border-fuchsia-primary/40 hover:bg-dark-bg/100 transition-all duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-fuchsia-primary" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-fuchsia-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="main-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-gradient-to-br from-[#1a0022] via-[#0a001a] to-[#2d003a] border-2 border-fuchsia-primary/60 rounded-2xl p-6 shadow-2xl">
              
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="text-fuchsia-primary hover:text-white transition-colors"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
              </div>

              {/* Logo */}
              <div className="flex items-center justify-center mb-6">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">F</span>
                  </div>
                  <span className="font-londrina font-bold text-2xl bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">
                    Fuchsia DAO
                  </span>
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg font-medium text-lg transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'text-fuchsia-primary bg-fuchsia-primary/20'
                          : 'text-gray-200 hover:text-fuchsia-primary hover:bg-fuchsia-primary/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Launch DAO Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-6"
              >
                <Link
                  to="/launchpad"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 px-6 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-center hover:scale-105 transition-transform duration-300"
                >
                  Launch DAO
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;