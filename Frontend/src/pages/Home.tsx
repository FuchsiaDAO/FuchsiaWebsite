import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CubeTransparentIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Home = () => {
  // How It Works steps
  const steps = [
    {
      number: "01",
      icon: <CubeTransparentIcon className="w-12 h-12" />,
      title: "Create",
      description: "Launch your DAO with customizable governance structures and smart contract templates."
    },
    {
      number: "02", 
      icon: <CogIcon className="w-12 h-12" />,
      title: "Govern",
      description: "Make collective decisions through transparent voting mechanisms and proposal systems."
    },
    {
      number: "03",
      icon: <ChartBarIcon className="w-12 h-12" />,
      title: "Grow",
      description: "Scale your community and treasury with data-driven insights and automated tools."
    }
  ];

  // Social links for Join Us section
  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.gg/fuchsiadao",
      icon: "💬",
      description: "Join our community discussions"
    },
    {
      name: "Twitter", 
      url: "https://twitter.com/fuchsiadao",
      icon: "🐦",
      description: "Follow us for updates"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 border border-fuchsia-primary/20 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-neon-purple/20 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-orbitron font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
              <span className="glitch" data-text="Finance,">Finance,</span>
              <br />
              <span className="bg-gradient-to-r from-fuchsia-primary via-neon-purple to-electric-blue bg-clip-text text-transparent">
                Rewritten in Fuchsia.
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-inter"
            >
              Empowering a new generation of financial coordination. 
              A bold, inclusive, and data-driven financial future—run by the people, not institutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Link
                to="/launchpad"
                className="group relative px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span className="relative z-10">Launch Your DAO</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 animate-glow opacity-75"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-fuchsia-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fuchsia-primary rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-8">
              <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">
                About Fuchsia DAO
              </span>
            </h2>
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                Fuchsia DAO is pioneering the future of decentralized finance by democratizing access to 
                sophisticated financial tools and collective decision-making. We believe that traditional 
                finance has failed to serve the needs of modern communities and creators.
              </p>
              <p>
                Our mission is to empower individuals and communities to create, govern, and grow their own 
                financial ecosystems without the constraints of traditional institutions. Through innovative 
                DAO infrastructure, we're building a world where financial coordination is transparent, 
                inclusive, and driven by community consensus.
              </p>
              <p className="text-fuchsia-primary font-semibold">
                Together, we're not just participating in DeFi — we're redefining what finance can be.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building the future of finance in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines for larger screens */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-fuchsia-primary to-neon-purple transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-neon-purple to-electric-blue transform -translate-y-1/2"></div>

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300 text-center"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
                
                <div className="text-fuchsia-primary mb-6 flex justify-center">{step.icon}</div>
                <h3 className="font-orbitron font-semibold text-2xl mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA below How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12 space-y-4"
          >
            <Link
              to="/features"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 hover:scale-105 mr-4"
            >
              <span>Explore All Features</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-fuchsia-primary rounded-lg text-fuchsia-primary font-semibold hover:bg-fuchsia-primary hover:text-white transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-primary/10 to-neon-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">
                Join Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be part of the revolution. Connect with builders, creators, and visionaries 
              shaping the future of decentralized finance.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group w-full sm:w-80 bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{social.icon}</div>
                <h3 className="font-orbitron font-semibold text-xl mb-2 text-fuchsia-primary group-hover:text-neon-purple transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-gray-400 text-sm">{social.description}</p>
              </motion.a>
            ))}
          </div>

          {/* Additional community CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/community"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span>Explore Community</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
