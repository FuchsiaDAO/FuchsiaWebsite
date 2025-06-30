import { motion } from 'framer-motion';
import { 
  HandRaisedIcon,
  DocumentTextIcon,
  UsersIcon,
  CheckBadgeIcon,
  ClockIcon,
  TrophyIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Governance = () => {
  const governanceStats = [
    { title: "Active Proposals", value: "12", icon: <DocumentTextIcon className="w-8 h-8" /> },
    { title: "Total Voters", value: "1,247", icon: <UsersIcon className="w-8 h-8" /> },
    { title: "Proposals Passed", value: "89", icon: <CheckBadgeIcon className="w-8 h-8" /> },
    { title: "Avg. Participation", value: "67%", icon: <HandRaisedIcon className="w-8 h-8" /> }
  ];

  const activeProposals = [
    {
      id: "FIP-042",
      title: "Increase Treasury Allocation to DeFi Strategies",
      description: "Proposal to allocate an additional 20% of treasury funds to high-yield DeFi protocols with proven track records.",
      proposer: "0x1234...abcd",
      votesFor: 1247,
      votesAgainst: 523,
      quorum: "68%",
      timeLeft: "2 days",
      status: "Active",
      category: "Treasury"
    },
    {
      id: "FIP-041", 
      title: "Implement New Governance Token Staking Mechanism",
      description: "Introduce a staking mechanism for governance tokens to increase participation and align long-term incentives.",
      proposer: "0x5678...efgh",
      votesFor: 892,
      votesAgainst: 231,
      quorum: "45%",
      timeLeft: "5 days",
      status: "Active",
      category: "Governance"
    },
    {
      id: "FIP-040",
      title: "Partnership with Chainlink for Oracle Services",
      description: "Establish partnership with Chainlink to integrate reliable price feeds for improved strategy execution.",
      proposer: "0x9abc...ijkl",
      votesFor: 1456,
      votesAgainst: 189,
      quorum: "78%",
      timeLeft: "1 day",
      status: "Passing",
      category: "Partnership"
    }
  ];

  const governanceProcess = [
    {
      step: "1",
      title: "Proposal Creation",
      description: "Any token holder can create a proposal with a minimum threshold of tokens.",
      icon: <DocumentTextIcon className="w-12 h-12" />
    },
    {
      step: "2", 
      title: "Community Discussion",
      description: "Proposals are discussed in forums for community feedback and refinement.",
      icon: <ChatBubbleBottomCenterTextIcon className="w-12 h-12" />
    },
    {
      step: "3",
      title: "Voting Period",
      description: "Token holders vote during a 7-day voting period with transparent results.",
      icon: <HandRaisedIcon className="w-12 h-12" />
    },
    {
      step: "4",
      title: "Execution",
      description: "Passed proposals are automatically executed through smart contracts.",
      icon: <CheckBadgeIcon className="w-12 h-12" />
    }
  ];

  const votingPower = [
    { range: "1-100 tokens", percentage: 35, holders: 892 },
    { range: "101-1,000 tokens", percentage: 28, holders: 345 },
    { range: "1,001-10,000 tokens", percentage: 22, holders: 89 },
    { range: "10,001+ tokens", percentage: 15, holders: 23 }
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
              DAO <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Governance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Participate in democratic decision-making through transparent voting and proposal systems. Your voice shapes the future of our DAO.
            </p>

            {/* Governance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {governanceStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
                >
                  <div className="text-fuchsia-primary mb-4">{stat.icon}</div>
                  <div className="text-3xl font-londrina font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Proposals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Active <span className="text-fuchsia-primary">Proposals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vote on current proposals and help shape the direction of our DAO
            </p>
          </motion.div>

          <div className="space-y-6">
            {activeProposals.map((proposal, index) => (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-fuchsia-primary/20 text-fuchsia-primary rounded-full text-sm font-medium">
                        {proposal.id}
                      </span>
                      <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-medium">
                        {proposal.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        proposal.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                        proposal.status === 'Passing' ? 'bg-green-500/20 text-green-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {proposal.status}
                      </span>
                    </div>
                    <h3 className="font-londrina font-bold text-xl mb-3">{proposal.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{proposal.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Proposed by: {proposal.proposer}</span>
                    </div>
                  </div>
                  
                  <div className="lg:w-80">
                    <div className="space-y-4">
                      {/* Voting Progress */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-green-400">For: {proposal.votesFor.toLocaleString()}</span>
                          <span className="text-red-400">Against: {proposal.votesAgainst.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full"
                            style={{ 
                              width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` 
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm mt-2 text-gray-400">
                          <span>Quorum: {proposal.quorum}</span>
                          <span className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {proposal.timeLeft} left
                          </span>
                        </div>
                      </div>
                      
                      {/* Vote Buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors duration-200">
                          Vote For
                        </button>
                        <button className="flex-1 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-200">
                          Vote Against
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Create New Proposal</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Governance Process */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              How Governance <span className="text-neon-purple">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our democratic process ensures every voice is heard and every decision is transparent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < governanceProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-fuchsia-primary to-transparent transform translate-x-4"></div>
                )}
                
                <div className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">
                    {step.step}
                  </div>
                  <div className="text-fuchsia-primary mb-4">{step.icon}</div>
                  <h3 className="font-londrina font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voting Power Distribution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Voting Power <span className="text-fuchsia-primary">Distribution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent breakdown of voting power across token holders
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {votingPower.map((range, index) => (
                <motion.div
                  key={range.range}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-londrina font-bold text-lg">{range.range}</div>
                      <div className="text-sm text-gray-400">{range.holders} holders</div>
                    </div>
                    <div className="text-2xl font-bold text-fuchsia-primary">{range.percentage}%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-fuchsia-primary to-neon-purple h-3 rounded-full"
                      style={{ width: `${range.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <TrophyIcon className="w-16 h-16 text-fuchsia-primary mx-auto mb-6" />
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Your Voice <span className="text-fuchsia-primary">Matters</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of members shaping the future of decentralized finance through democratic governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 flex items-center space-x-2"
              >
                <HandRaisedIcon className="w-5 h-5" />
                <span>Start Voting</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-fuchsia-primary rounded-lg text-fuchsia-primary font-semibold text-lg hover:bg-fuchsia-primary hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <DocumentTextIcon className="w-5 h-5" />
                <span>Create Proposal</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Governance;
