import { motion } from 'framer-motion';

const Launchpad = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-orbitron font-bold text-5xl md:text-6xl mb-6">
              DAO <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Launchpad</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Launch your own decentralized autonomous organization with our powerful tools and infrastructure.
            </p>
            <div className="mt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Create Your DAO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 animate-glow opacity-75"></div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Launchpad;
