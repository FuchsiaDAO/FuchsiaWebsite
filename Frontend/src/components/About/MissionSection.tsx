import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const MissionSection = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container-base">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-6 text-white">
              Our Mission
            </h2>
            <p className="body-lg mb-6">
              Traditional finance is broken. Centralized institutions extract value, 
              hide their strategies, and limit access to sophisticated investment tools. 
              We're building a better way.
            </p>
            <p className="body-base mb-8">
              Fuchsia DAO democratizes access to institutional-grade investment strategies 
              through AI-powered automation and transparent governance. Every member has 
              a voice, every decision is recorded on-chain, and every profit is shared fairly.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-fuchsia-primary rounded-full"></div>
                <span className="text-sm font-londrina text-text-secondary">Decentralized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                <span className="text-sm font-londrina text-text-secondary">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                <span className="text-sm font-londrina text-text-secondary">Community-Owned</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-highlight p-8"
          >
            <h3 className="heading-md mb-6 text-white">
              Why Fuchsia?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CurrencyDollarIcon className="w-5 h-5 text-fuchsia-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-londrina font-semibold text-white mb-1">Superior Returns</h4>
                  <p className="text-sm text-text-secondary">AI algorithms identify opportunities human traders miss</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheckIcon className="w-5 h-5 text-neon-purple mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-londrina font-semibold text-white mb-1">Risk Management</h4>
                  <p className="text-sm text-text-secondary">Automated systems protect your investment 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <UserGroupIcon className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-londrina font-semibold text-white mb-1">Community Power</h4>
                  <p className="text-sm text-text-secondary">Your voice matters in every strategic decision</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
