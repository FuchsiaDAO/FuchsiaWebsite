import { motion } from 'framer-motion';
import { UserGroupIcon, LightBulbIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const About = () => {
  const values = [
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Community-Driven",
      description: "Built by the community, for the community. Every decision is transparent and democratic."
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Innovation First",
      description: "Pushing the boundaries of DeFi with cutting-edge technology and bold experiments."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Security & Trust",
      description: "Battle-tested smart contracts and transparent operations build lasting trust."
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Global Access",
      description: "Permissionless and borderless. Finance reimagined for the digital age."
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Genesis",
      description: "Fuchsia DAO was born from a vision to democratize financial coordination."
    },
    {
      year: "2024 Q2",
      title: "First Launch",
      description: "Launched the first DAO launchpad with 10 founding communities."
    },
    {
      year: "2024 Q4",
      title: "Major Upgrade",
      description: "Introduced advanced treasury management and governance features."
    },
    {
      year: "2025",
      title: "Scale & Growth",
      description: "Expanding to support 1000+ DAOs with enhanced security protocols."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-orbitron font-bold text-5xl md:text-6xl mb-6">
              About <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Fuchsia DAO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're not just another DeFi protocol. We're a movement reshaping how capital flows in the digital age, 
              building infrastructure for a future where financial coordination is transparent, inclusive, and community-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-orbitron font-bold text-4xl mb-6">
                Our <span className="text-fuchsia-primary">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Fuchsia DAO is a community-governed protocol reshaping how capital flows in the digital age. 
                We provide on-chain infrastructure for pooled capital, investment syndicates, and permissionless treasury management.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From Gen Z degen squads to mission-aligned communities, Fuchsia empowers you to launch, manage, 
                and grow your decentralized capital collective—all without middlemen.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-fuchsia-primary/20 to-neon-purple/20 rounded-xl p-8 backdrop-blur-sm border border-fuchsia-primary/30">
                <h3 className="font-orbitron font-semibold text-2xl mb-4 text-fuchsia-primary">Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "A bold, inclusive, and data-driven financial future—run by the people, not institutions."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-4xl mb-6">
              Our <span className="text-neon-purple">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we build and every decision we make as a community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="text-fuchsia-primary mb-4">{value.icon}</div>
                <h3 className="font-orbitron font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron font-bold text-4xl mb-6">
              Our <span className="text-electric-blue">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a bold idea to a thriving ecosystem of decentralized communities.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-fuchsia-primary to-neon-purple"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6">
                      <div className="text-fuchsia-primary font-orbitron font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-full border-4 border-dark-bg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron font-bold text-4xl mb-6">
              Built by the <span className="text-fuchsia-primary">Community</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Fuchsia DAO is more than a protocol—it's a collective of builders, dreamers, and financial rebels 
              working together to rewrite the rules of finance.
            </p>
            <div className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-gray-300 italic">
                "We believe the future of finance belongs in the hands of the people who use it. 
                That's why Fuchsia DAO is governed entirely by its community—no VCs, no central authority, 
                just pure democratic coordination."
              </p>
              <div className="mt-4 text-fuchsia-primary font-semibold">- The Fuchsia Collective</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
