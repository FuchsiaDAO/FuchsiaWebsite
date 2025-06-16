import { motion } from 'framer-motion';

const Community = () => {
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
              Join the <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with thousands of builders, creators, and financial rebels reshaping the future of finance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-orbitron font-semibold text-xl mb-2">Discord</h3>
                <p className="text-gray-400">Join daily discussions and governance talks</p>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">🐦</div>
                <h3 className="font-orbitron font-semibold text-xl mb-2">Twitter</h3>
                <p className="text-gray-400">Stay updated with latest announcements</p>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-orbitron font-semibold text-xl mb-2">Telegram</h3>
                <p className="text-gray-400">Real-time community chat and support</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;
