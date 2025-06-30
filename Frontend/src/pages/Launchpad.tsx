import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon,
  CogIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  BoltIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';

const Launchpad = () => {
  const launchSteps = [
    {
      step: "01",
      title: "Choose Your Template",
      description: "Select from pre-built DAO templates or start from scratch",
      icon: <DocumentDuplicateIcon className="w-8 h-8" />,
      options: ["Investment DAO", "Grant DAO", "Social DAO", "Custom"]
    },
    {
      step: "02", 
      title: "Configure Governance",
      description: "Set up voting mechanisms, quorum requirements, and proposal thresholds",
      icon: <CogIcon className="w-8 h-8" />,
      options: ["Token-weighted", "One-person-one-vote", "Quadratic", "Delegated"]
    },
    {
      step: "03",
      title: "Design Tokenomics",
      description: "Define token supply, distribution, and vesting schedules",
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      options: ["Fixed supply", "Inflationary", "Deflationary", "Hybrid"]
    },
    {
      step: "04",
      title: "Deploy & Launch",
      description: "Deploy smart contracts and invite your first members",
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      options: ["Mainnet", "Polygon", "Arbitrum", "Testnet"]
    }
  ];

  const templates = [
    {
      name: "Investment DAO",
      description: "Pool capital and make collective investment decisions",
      features: [
        "Multi-asset treasury management",
        "Proposal-based investments", 
        "Automated profit distribution",
        "Risk management tools"
      ],
      price: "Free",
      popular: true,
      gradient: "from-fuchsia-primary to-pink-500"
    },
    {
      name: "Grant DAO",
      description: "Fund projects and initiatives through democratic processes",
      features: [
        "Grant application system",
        "Milestone-based funding",
        "Community review process",
        "Impact tracking"
      ],
      price: "Free", 
      popular: false,
      gradient: "from-neon-purple to-blue-500"
    },
    {
      name: "Social DAO",
      description: "Build communities with token-gated access and rewards",
      features: [
        "Membership tiers",
        "Exclusive content access",
        "Community rewards",
        "Social governance"
      ],
      price: "Free",
      popular: false,
      gradient: "from-electric-blue to-cyan-500"
    },
    {
      name: "Venture DAO",
      description: "Professional investment collective for startups and tokens",
      features: [
        "Due diligence workflows",
        "LP management",
        "Deal flow tracking",
        "Portfolio analytics"
      ],
      price: "Pro",
      popular: false,
      gradient: "from-cyber-green to-green-500"
    }
  ];

  const features = [
    {
      title: "No-Code Setup",
      description: "Launch your DAO without writing a single line of code",
      icon: <SparklesIcon className="w-12 h-12" />
    },
    {
      title: "Instant Deployment",
      description: "Deploy to multiple chains in under 5 minutes",
      icon: <BoltIcon className="w-12 h-12" />
    },
    {
      title: "Audited Contracts",
      description: "Built on battle-tested, security-audited smart contracts",
      icon: <ShieldCheckIcon className="w-12 h-12" />
    },
    {
      title: "Advanced Tools",
      description: "Access professional-grade DAO management tools",
      icon: <CodeBracketIcon className="w-12 h-12" />
    }
  ];

  const recentLaunches = [
    {
      name: "EcoVenture DAO",
      description: "Sustainable technology investments",
      members: 245,
      treasury: "$1.2M",
      timeAgo: "2 hours ago",
      logo: "🌱"
    },
    {
      name: "GameFi Collective",
      description: "Gaming and NFT investments",
      members: 892,
      treasury: "$3.8M", 
      timeAgo: "6 hours ago",
      logo: "🎮"
    },
    {
      name: "AI Research DAO",
      description: "Funding AI research projects",
      members: 156,
      treasury: "$750K",
      timeAgo: "1 day ago", 
      logo: "🤖"
    },
    {
      name: "DeFi Yield Guild",
      description: "Optimized yield farming strategies",
      members: 634,
      treasury: "$2.1M",
      timeAgo: "2 days ago",
      logo: "⚡"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small communities",
      features: [
        "Up to 100 members",
        "Basic governance tools",
        "Standard templates",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "$99/month",
      description: "For serious investment DAOs",
      features: [
        "Unlimited members",
        "Advanced analytics",
        "Custom governance",
        "Priority support",
        "Multi-chain deployment",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantees",
        "Advanced security",
        "Training & onboarding"
      ],
      popular: false
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
              DAO <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Launchpad</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Launch your own decentralized autonomous organization with our powerful tools and infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span>Create Your DAO</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 animate-glow opacity-75"></div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-fuchsia-primary rounded-lg text-fuchsia-primary font-semibold text-lg hover:bg-fuchsia-primary hover:text-white transition-all duration-300"
              >
                View Templates
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "2,500+", label: "DAOs Launched", icon: <RocketLaunchIcon className="w-8 h-8" /> },
              { number: "5 min", label: "Average Setup Time", icon: <ClockIcon className="w-8 h-8" /> },
              { number: "99.9%", label: "Success Rate", icon: <CheckCircleIcon className="w-8 h-8" /> }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-fuchsia-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="font-londrina font-bold text-3xl text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Launch Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Launch in <span className="text-fuchsia-primary">4 Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process gets your DAO up and running in minutes, not weeks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {launchSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300 relative"
              >
                <div className="text-6xl font-bold text-fuchsia-primary/20 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="text-fuchsia-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="font-londrina font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.options.map((option, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-fuchsia-primary rounded-full"></div>
                      <span className="text-gray-300 text-xs">{option}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              DAO <span className="text-neon-purple">Templates</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our battle-tested templates or customize your own
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-dark-bg/50 border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300 relative overflow-hidden ${
                  template.popular ? 'ring-2 ring-fuchsia-primary/50' : ''
                }`}
              >
                {template.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-fuchsia-primary text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-r ${template.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-londrina font-bold text-2xl text-white mb-3">
                  {template.name}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {template.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-4 h-4 text-cyber-green" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      {template.price}
                    </span>
                    {template.price !== "Free" && template.price !== "Custom" && (
                      <span className="text-gray-400 text-sm"> /month</span>
                    )}
                  </div>
                  <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    template.popular
                      ? 'bg-gradient-to-r from-fuchsia-primary to-neon-purple text-white hover:scale-105'
                      : 'border border-fuchsia-primary text-fuchsia-primary hover:bg-fuchsia-primary hover:text-white'
                  }`}>
                    Use Template
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Why Choose Our <span className="text-electric-blue">Launchpad</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-fuchsia-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-londrina font-bold text-xl text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Launches */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Recent <span className="text-cyber-green">Launches</span>
            </h2>
            <p className="text-xl text-gray-300">
              See what others are building with our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentLaunches.map((dao, index) => (
              <motion.div
                key={dao.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-bg/50 border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{dao.logo}</div>
                  <div className="flex-1">
                    <h3 className="font-londrina font-bold text-lg text-white">
                      {dao.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{dao.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-xs">{dao.timeAgo}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-fuchsia-primary/10">
                  <div>
                    <div className="text-gray-400 text-xs">Members</div>
                    <div className="text-white font-semibold">{dao.members}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Treasury</div>
                    <div className="text-cyber-green font-semibold">{dao.treasury}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Simple <span className="text-fuchsia-primary">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your DAO's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-fuchsia-primary/50 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-fuchsia-primary to-neon-purple text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="font-londrina font-bold text-2xl text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-gray-400"> /month</span>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-4 h-4 text-cyber-green" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-fuchsia-primary to-neon-purple text-white hover:scale-105'
                    : 'border border-fuchsia-primary text-fuchsia-primary hover:bg-fuchsia-primary hover:text-white'
                }`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fuchsia-primary/10 to-neon-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <RocketLaunchIcon className="w-16 h-16 text-fuchsia-primary mx-auto mb-6" />
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Ready to <span className="text-fuchsia-primary">Launch</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of communities building the future of decentralized organizations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300"
            >
              Start Building Your DAO
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Launchpad;
