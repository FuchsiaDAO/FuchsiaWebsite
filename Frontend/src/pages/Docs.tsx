import { motion } from 'framer-motion';

const Docs = () => {
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
              <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, API references, and technical documentation for building with Fuchsia DAO.
            </p>
            
            <div className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="font-orbitron font-semibold text-2xl mb-4 text-fuchsia-primary">Coming Soon</h3>
              <p className="text-gray-300 leading-relaxed">
                Our comprehensive documentation is being crafted by the community. 
                Join our Discord to contribute and get early access to developer resources.
              </p>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300">
                Join Discord
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Docs;
