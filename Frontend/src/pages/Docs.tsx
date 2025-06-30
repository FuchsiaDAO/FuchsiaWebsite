import { motion } from 'framer-motion';
import { 
  BookOpenIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  CommandLineIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  PlayIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

const Docs = () => {
  const docCategories = [
    {
      title: "Getting Started",
      icon: <RocketLaunchIcon className="w-12 h-12" />,
      description: "Quick start guides to launch your first DAO and begin investing",
      articles: [
        "Creating Your First DAO",
        "Setting Up Governance",
        "Treasury Management Basics",
        "Understanding Voting Power"
      ],
      gradient: "from-fuchsia-primary to-pink-500"
    },
    {
      title: "API Reference",
      icon: <CodeBracketIcon className="w-12 h-12" />,
      description: "Complete API documentation for developers building on Fuchsia",
      articles: [
        "REST API Endpoints",
        "GraphQL Schema",
        "Webhooks & Events",
        "Rate Limiting & Auth"
      ],
      gradient: "from-neon-purple to-blue-500"
    },
    {
      title: "Smart Contracts",
      icon: <CubeTransparentIcon className="w-12 h-12" />,
      description: "Technical documentation for our audited smart contract system",
      articles: [
        "Contract Architecture",
        "Deployment Guide",
        "Security Audits",
        "Upgrade Mechanisms"
      ],
      gradient: "from-electric-blue to-cyan-500"
    },
    {
      title: "Governance",
      icon: <ShieldCheckIcon className="w-12 h-12" />,
      description: "Learn how to participate in DAO governance and proposal creation",
      articles: [
        "Voting Mechanisms",
        "Proposal Lifecycle",
        "Delegation System",
        "Governance Token Economics"
      ],
      gradient: "from-cyber-green to-green-500"
    }
  ];

  const quickLinks = [
    { title: "Installation Guide", icon: <CommandLineIcon className="w-6 h-6" />, time: "5 min read" },
    { title: "API Authentication", icon: <ShieldCheckIcon className="w-6 h-6" />, time: "3 min read" },
    { title: "Contract Deployment", icon: <CubeTransparentIcon className="w-6 h-6" />, time: "10 min read" },
    { title: "Governance Tutorial", icon: <PlayIcon className="w-6 h-6" />, time: "15 min read" }
  ];

  const codeExamples = [
    {
      title: "Create a DAO",
      language: "JavaScript",
      code: `import { FuchsiaSDK } from '@fuchsia/sdk';

const fuchsia = new FuchsiaSDK({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Create a new DAO
const dao = await fuchsia.createDAO({
  name: 'My Investment DAO',
  symbol: 'MYDAO',
  initialSupply: 1000000,
  governanceType: 'token-weighted'
});

console.log('DAO created:', dao.address);`
    },
    {
      title: "Submit Proposal",
      language: "JavaScript", 
      code: `// Submit a governance proposal
const proposal = await dao.submitProposal({
  title: 'Increase Treasury Allocation',
  description: 'Proposal to allocate 20% more to DeFi strategies',
  actions: [
    {
      target: treasury.address,
      value: 0,
      calldata: treasury.interface.encodeFunctionData(
        'setAllocation',
        ['defi-strategies', 20]
      )
    }
  ]
});

console.log('Proposal submitted:', proposal.id);`
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Fuchsia DAO?",
      answer: "Start by connecting your wallet and joining an existing DAO or creating your own. Our Getting Started guide walks you through the entire process step-by-step."
    },
    {
      question: "What are the gas fees for DAO operations?",
      answer: "Most DAO operations cost between 0.01-0.05 ETH in gas fees. Voting is gasless thanks to our meta-transaction system."
    },
    {
      question: "How secure are the smart contracts?",
      answer: "All our contracts have been audited by multiple firms including Trail of Bits and ConsenSys. We also have a bug bounty program with rewards up to $100,000."
    },
    {
      question: "Can I integrate Fuchsia DAO into my existing project?",
      answer: "Yes! Our SDK and API make it easy to integrate DAO functionality into any application. Check out our integration guides for popular frameworks."
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
              <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides, API references, and technical documentation for building with Fuchsia DAO.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-6 py-4 bg-dark-card/50 border border-fuchsia-primary/20 rounded-xl text-white placeholder-gray-400 focus:border-fuchsia-primary/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-primary/20"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-fuchsia-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-dark-card/30 border border-fuchsia-primary/20 rounded-lg hover:border-fuchsia-primary/40 transition-all duration-300"
                >
                  <div className="text-fuchsia-primary">{link.icon}</div>
                  <div className="text-left">
                    <div className="font-londrina font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-gray-400 text-xs">{link.time}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Browse <span className="text-fuchsia-primary">Documentation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find guides, tutorials, and references for everything you need to build with Fuchsia DAO
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`text-transparent bg-gradient-to-r ${category.gradient} bg-clip-text`}>
                    {category.icon}
                  </div>
                  <h3 className="font-londrina font-bold text-2xl text-white group-hover:text-fuchsia-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                <div className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center justify-between p-3 bg-dark-bg/30 rounded-lg hover:bg-dark-bg/50 transition-colors duration-200 group/item"
                    >
                      <div className="flex items-center space-x-3">
                        <DocumentTextIcon className="w-4 h-4 text-gray-400 group-hover/item:text-fuchsia-primary transition-colors duration-200" />
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
                          {article}
                        </span>
                      </div>
                      <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover/item:text-fuchsia-primary transform group-hover/item:translate-x-1 transition-all duration-200" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Code <span className="text-neon-purple">Examples</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with these code snippets and examples
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-dark-bg/50 border border-fuchsia-primary/20 rounded-xl overflow-hidden hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="p-6 border-b border-fuchsia-primary/20">
                  <div className="flex items-center justify-between">
                    <h3 className="font-londrina font-bold text-lg text-white">{example.title}</h3>
                    <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                      {example.language}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
                <div className="p-4 bg-dark-card/30 border-t border-fuchsia-primary/10">
                  <button className="flex items-center space-x-2 text-fuchsia-primary hover:text-fuchsia-300 transition-colors duration-200">
                    <LinkIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Copy Code</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Frequently Asked <span className="text-fuchsia-primary">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions about Fuchsia DAO
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <h3 className="font-londrina font-bold text-lg text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
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
            <BookOpenIcon className="w-16 h-16 text-fuchsia-primary mx-auto mb-6" />
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Need More <span className="text-fuchsia-primary">Help</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our community and support team are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Join Discord</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-fuchsia-primary rounded-lg text-fuchsia-primary font-semibold text-lg hover:bg-fuchsia-primary hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <DocumentTextIcon className="w-5 h-5" />
                <span>Submit Feedback</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Docs;
