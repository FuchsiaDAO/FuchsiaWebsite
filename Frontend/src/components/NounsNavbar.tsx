import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NounsNavbar = () => {
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
    { name: 'DAO', path: '/about' },
    { name: 'Invest', path: '/features' },
    { name: 'Governance', path: '/governance' },
    { name: 'Treasury', path: '/treasury' },
    { name: 'Community', path: '/community' },
    { name: 'Docs', path: '/docs' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-bg/95 backdrop-blur-lg border-b border-fuchsia-primary/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-base">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Fuchsia Glyph */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <img 
                    src="/fuchsia-glyph.svg" 
                    alt="Fuchsia DAO Logo" 
                    className="w-10 h-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(232,121,249,0.5)]"
                  />
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-fuchsia-primary to-neon-purple rounded-full opacity-0 blur-md group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-londrina font-bold text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-primary group-hover:to-neon-purple group-hover:bg-clip-text transition-all duration-300">
                  Fuchsia
                </span>
                <span className="font-londrina text-sm text-text-secondary -mt-1">
                  Investment DAO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Nouns style: clean and centered */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-3 font-londrina font-medium text-base transition-all duration-300 rounded-xl ${
                    location.pathname === item.path
                      ? "text-white bg-fuchsia-primary/20 shadow-glow-fuchsia"
                      : "text-text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-fuchsia-primary rounded-full animate-pulse-glow"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Nouns style but cyberpunk */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="btn-primary font-londrina">Launch App</button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-text-secondary hover:text-fuchsia-primary transition-colors duration-200 p-2"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Nouns inspired overlay */}
      {isOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-dark-bg/75 backdrop-blur-lg z-40">
          <div className="container-base py-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`card-base text-center py-4 font-londrina font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? "border-fuchsia-primary/40 text-fuchsia-primary bg-fuchsia-primary/10"
                      : "text-text-secondary hover:text-white hover:border-fuchsia-primary/20"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              className="btn-primary w-full font-londrina"
              onClick={() => setIsOpen(false)}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NounsNavbar;
