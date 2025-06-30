import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Discord', url: '#', icon: '💬' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Telegram', url: '#', icon: '📱' },
    { name: 'GitHub', url: '#', icon: '⚡' },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Launchpad', path: '/launchpad' },
    { name: 'Treasury', path: '/treasury' },
  ];

  const resources = [
    { name: 'Documentation', path: '/docs' },
    { name: 'Governance', path: '/governance' },
    { name: 'Blog', path: '/blog' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <footer className="bg-dark-card/50 backdrop-blur-md border-t border-fuchsia-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/fuchsia-glyph.svg" 
                  alt="Fuchsia DAO Logo" 
                  className="w-8 h-8 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(232,121,249,0.5)]"
                />
              </div>
              <span className="font-londrina font-bold text-2xl bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">
                Fuchsia DAO
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering a new generation of financial coordination. Building a transparent, 
              decentralized platform for managing digital assets and collective investment strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-fuchsia-primary/20 to-neon-purple/20 rounded-lg flex items-center justify-center hover:from-fuchsia-primary/40 hover:to-neon-purple/40 transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-londrina font-semibold text-lg mb-4 text-fuchsia-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-fuchsia-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-londrina font-semibold text-lg mb-4 text-fuchsia-primary">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-fuchsia-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Fuchsia DAO. All rights reserved. Built with ⚡ by the community.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-fuchsia-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-primary transition-colors duration-200">
                Security
              </a>
            </div>
          </div>
        </div>

        {/* Easter Egg Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 p-4 bg-jet-black rounded-lg border border-fuchsia-primary/20"
        >
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-xs ml-2">fuchsia-terminal</span>
          </div>
          <div className="font-mono text-sm">
            <span className="text-fuchsia-primary">fuchsia@dao:~$</span>
            <span className="text-green-400 ml-2">echo "The future is decentralized"</span>
            <br />
            <span className="text-gray-400">The future is decentralized</span>
            <br />
            <span className="text-fuchsia-primary">fuchsia@dao:~$</span>
            <span className="text-electric-blue ml-2 animate-pulse">_</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
