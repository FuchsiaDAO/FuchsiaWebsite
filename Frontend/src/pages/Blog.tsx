import { motion } from 'framer-motion';

const Blog = () => {
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
              Fuchsia <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments, insights, and community stories from the Fuchsia ecosystem.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
