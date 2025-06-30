import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon, 
  ChartBarIcon, 
  CheckBadgeIcon, 
  ShieldCheckIcon,
  CubeTransparentIcon,
  UsersIcon,
  BanknotesIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  LockClosedIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  // Main feature categories
  const mainFeatures = [
    {
      icon: <RocketLaunchIcon className="w-16 h-16" />,
      title: "DAO Launchpad",
      subtitle: "Launch your financial collective",
      description: "Create and deploy your DAO in minutes with customizable governance structures, smart contract templates, and automated setup processes.",
      highlights: [
        "One-click DAO deployment",
        "Customizable governance templates", 
        "Multi-sig wallet integration",
        "Token distribution tools"
      ],
      link: "/launchpad",
      gradient: "from-fuchsia-primary to-pink-500"
    },
    {
      icon: <ChartBarIcon className="w-16 h-16" />,
      title: "Treasury Dashboard", 
      subtitle: "Manage collective assets",
      description: "Comprehensive treasury management with real-time analytics, automated reporting, and transparent asset tracking for all stakeholders.",
      highlights: [
        "Real-time portfolio tracking",
        "Automated financial reporting",
        "Multi-chain asset support", 
        "Risk assessment tools"
      ],
      link: "/treasury",
      gradient: "from-neon-purple to-blue-500"
    },
    {
      icon: <CheckBadgeIcon className="w-16 h-16" />,
      title: "Voting & Governance",
      subtitle: "Democratic decision making",
      description: "Sophisticated governance tools enabling transparent voting, proposal creation, and democratic consensus building for all community decisions.",
      highlights: [
        "Quadratic voting mechanisms",
        "Proposal creation wizard",
        "Delegation & representative voting",
        "Execution timelock protection"
      ],
      link: "/governance", 
      gradient: "from-electric-blue to-teal-500"
    },
    {
      icon: <ShieldCheckIcon className="w-16 h-16" />,
      title: "NFT/Token Gating",
      subtitle: "Access control & membership",
      description: "Advanced gating mechanisms using NFTs and tokens to control access, permissions, and membership tiers within your DAO ecosystem.",
      highlights: [
        "Multi-token gating support",
        "NFT membership tiers",
        "Dynamic permission systems",
        "Cross-chain compatibility"
      ],
      link: "/community",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  // Additional tools and capabilities
  const additionalTools = [
    {
      icon: <CubeTransparentIcon className="w-8 h-8" />,
      title: "Smart Contract Suite",
      description: "Battle-tested smart contracts for governance, treasury, and token management."
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Community Building",
      description: "Tools for member onboarding, engagement tracking, and community growth."
    },
    {
      icon: <BanknotesIcon className="w-8 h-8" />,
      title: "DeFi Integration",
      description: "Native integration with leading DeFi protocols for yield generation."
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "Automation Engine",
      description: "Automate recurring tasks, payments, and governance processes."
    },
    {
      icon: <LockClosedIcon className="w-8 h-8" />,
      title: "Security First",
      description: "Multi-layer security with audited contracts and formal verification."
    },
    {
      icon: <BeakerIcon className="w-8 h-8" />,
      title: "Innovation Lab",
      description: "Experimental features and cutting-edge DAO mechanisms."
    }
  ];

  // Statistics for credibility
  const stats = [
    { value: "500+", label: "DAOs Launched" },
    { value: "$15M+", label: "Total Value Managed" },
    { value: "50K+", label: "Active Voters" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-londrina font-bold text-5xl md:text-7xl mb-6">
              <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">
                What We Do
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering communities with cutting-edge DAO infrastructure. 
              From launch to governance to growth—we provide everything you need to build the future of finance.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-londrina font-bold bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-londrina">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`text-6xl mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                  <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-xl text-fuchsia-primary mb-4 font-semibold">
                    {feature.subtitle}
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <StarIcon className="w-5 h-5 text-fuchsia-primary flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={feature.link}
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${feature.gradient} rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <span>Explore {feature.title}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual/Mockup */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className={`h-96 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-2xl`}></div>
                    <div className="absolute inset-4 bg-dark-card/80 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center justify-center">
                      <div className={`text-8xl bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent opacity-50`}>
                        {feature.icon}
                      </div>
                    </div>
                    {/* Floating elements for visual appeal */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-fuchsia-primary rounded-full opacity-70"
                    ></motion.div>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full opacity-60"
                    ></motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tools Grid */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">
                Complete DAO Toolkit
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, manage, and scale your decentralized organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="text-fuchsia-primary mb-4">{tool.icon}</div>
                <h3 className="font-londrina font-semibold text-xl mb-3">{tool.title}</h3>
                <p className="text-gray-400 leading-relaxed">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-primary/10 to-neon-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Ready to <span className="text-fuchsia-primary">Build Your DAO</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution. Launch your decentralized organization today and shape the future of finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/launchpad"
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <RocketLaunchIcon className="w-5 h-5" />
                <span>Launch Your DAO</span>
              </Link>
              <Link
                to="/docs"
                className="px-8 py-4 border border-fuchsia-primary rounded-lg text-fuchsia-primary font-semibold text-lg hover:bg-fuchsia-primary hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Documentation</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
