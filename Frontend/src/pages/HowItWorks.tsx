import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  LightBulbIcon,
  BanknotesIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Create Your DAO",
      description: "Launch your decentralized investment organization in minutes using our intuitive no-code launchpad.",
      icon: <RocketLaunchIcon className="w-12 h-12" />,
      features: [
        "Choose governance structure",
        "Set token economics", 
        "Configure voting parameters",
        "Deploy smart contracts"
      ],
      gradient: "from-fuchsia-primary to-pink-500"
    },
    {
      id: "02", 
      title: "Gather Community",
      description: "Invite members and distribute governance tokens to build a strong, aligned investment community.",
      icon: <UserGroupIcon className="w-12 h-12" />,
      features: [
        "Member onboarding tools",
        "Token distribution mechanisms",
        "Role-based permissions",
        "Community engagement features"
      ],
      gradient: "from-neon-purple to-blue-500"
    },
    {
      id: "03",
      title: "Pool Capital",
      description: "Members contribute funds to the shared treasury, creating a powerful collective investment vehicle.",
      icon: <BanknotesIcon className="w-12 h-12" />,
      features: [
        "Multi-asset treasury support",
        "Flexible contribution terms",
        "Automated escrow systems",
        "Real-time balance tracking"
      ],
      gradient: "from-electric-blue to-cyan-500"
    },
    {
      id: "04",
      title: "Vote on Investments",
      description: "Propose and vote on investment opportunities using transparent, on-chain governance mechanisms.",
      icon: <ScaleIcon className="w-12 h-12" />,
      features: [
        "Proposal creation tools",
        "Weighted voting systems",
        "Discussion forums",
        "Automated execution"
      ],
      gradient: "from-cyber-green to-green-500"
    },
    {
      id: "05",
      title: "Execute Strategies",
      description: "Deploy capital into approved investments with automated execution and continuous monitoring.",
      icon: <CogIcon className="w-12 h-12" />,
      features: [
        "DeFi protocol integration",
        "Yield farming automation",
        "Risk management tools",
        "Performance analytics"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: "06",
      title: "Share Returns",
      description: "Profits are automatically distributed to members based on their stake and governance participation.",
      icon: <ChartBarIcon className="w-12 h-12" />,
      features: [
        "Proportional profit sharing",
        "Automatic distributions",
        "Tax optimization",
        "Performance reporting"
      ],
      gradient: "from-purple-500 to-fuchsia-primary"
    }
  ];

  const keyFeatures = [
    {
      title: "Gasless Voting",
      description: "Vote on proposals without paying gas fees thanks to our meta-transaction infrastructure.",
      icon: <CheckCircleIcon className="w-8 h-8" />
    },
    {
      title: "Multi-Chain Support", 
      description: "Deploy and manage DAOs across Ethereum, Polygon, Arbitrum, and other EVM chains.",
      icon: <CogIcon className="w-8 h-8" />
    },
    {
      title: "Smart Treasury",
      description: "AI-powered treasury management with automated rebalancing and yield optimization.",
      icon: <LightBulbIcon className="w-8 h-8" />
    },
    {
      title: "Security First",
      description: "Audited smart contracts and multi-sig security ensure your funds are always protected.",
      icon: <ShieldCheckIcon className="w-8 h-8" />
    }
  ];

  const useCases = [
    {
      title: "Investment Clubs",
      description: "Friends and colleagues pooling money for shared investments",
      example: "20 crypto enthusiasts each contribute $5K to invest in DeFi protocols",
      roi: "Average 18% APY"
    },
    {
      title: "Venture DAOs",
      description: "Funding early-stage startups and crypto projects", 
      example: "100 members funding pre-seed rounds with collective due diligence",
      roi: "3x average returns"
    },
    {
      title: "DeFi Strategies",
      description: "Sophisticated yield farming and protocol investments",
      example: "Automated liquidity provision across multiple DEXs",
      roi: "22% average APY"
    },
    {
      title: "NFT Collections",
      description: "Collective ownership of high-value NFT assets",
      example: "Community acquiring blue-chip NFTs and digital art",
      roi: "85% price appreciation"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-primary/10 to-neon-purple/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-londrina font-bold text-5xl md:text-6xl mb-6">
              How <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">It Works</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn how Fuchsia DAO revolutionizes decentralized finance through innovative technology and community governance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <PlayIcon className="w-5 h-5" />
              <span>Watch Demo Video</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Simple <span className="text-fuchsia-primary">6-Step Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From idea to execution, build and scale your investment DAO in just a few clicks
            </p>
          </motion.div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.id}
                    </div>
                    <div className={`text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-londrina font-bold text-3xl text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-5 h-5 text-cyber-green" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className={`bg-gradient-to-br ${step.gradient} p-1 rounded-2xl`}>
                    <div className="bg-dark-card/90 backdrop-blur-sm rounded-xl p-8 h-80 flex items-center justify-center">
                      <div className={`text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`}>
                        <div className="scale-[3]">{step.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Powerful <span className="text-neon-purple">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced tools and capabilities that make Fuchsia DAO the premier choice for collective investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-bg/50 border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300 text-center group"
              >
                <div className="text-fuchsia-primary mb-4 group-hover:text-neon-purple transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-londrina font-bold text-lg text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Popular <span className="text-electric-blue">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different communities are using Fuchsia DAO to achieve their investment goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <h3 className="font-londrina font-bold text-2xl text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="bg-dark-bg/50 border border-fuchsia-primary/10 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 text-sm italic">
                    "{useCase.example}"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyber-green font-semibold">
                    {useCase.roi}
                  </span>
                  <button className="flex items-center space-x-2 text-fuchsia-primary hover:text-fuchsia-300 transition-colors duration-200">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-primary/10 to-neon-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Proven <span className="text-fuchsia-primary">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "2,500+", label: "DAOs Created", icon: <UserGroupIcon className="w-8 h-8" /> },
              { number: "$150M+", label: "Total Value Locked", icon: <CurrencyDollarIcon className="w-8 h-8" /> },
              { number: "23.5%", label: "Average APY", icon: <ChartBarIcon className="w-8 h-8" /> },
              { number: "99.9%", label: "Uptime", icon: <ShieldCheckIcon className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-fuchsia-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="font-londrina font-bold text-4xl text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <RocketLaunchIcon className="w-16 h-16 text-fuchsia-primary mx-auto mb-6" />
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Ready to <span className="text-fuchsia-primary">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of communities already using Fuchsia DAO to revolutionize their investment strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300"
              >
                Create Your DAO
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-fuchsia-primary rounded-lg text-fuchsia-primary font-semibold text-lg hover:bg-fuchsia-primary hover:text-white transition-all duration-300"
              >
                Explore DAOs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
