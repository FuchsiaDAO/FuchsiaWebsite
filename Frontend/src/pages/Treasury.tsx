import { motion } from 'framer-motion';
import { 
  BanknotesIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  DocumentChartBarIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

const Treasury = () => {
  const treasuryStats = [
    { 
      title: "Total Value Locked", 
      value: "$2.4M", 
      change: "+12.5%",
      positive: true,
      icon: <BanknotesIcon className="w-8 h-8" />
    },
    { 
      title: "Monthly Returns", 
      value: "18.5%", 
      change: "+3.2%",
      positive: true,
      icon: <ArrowTrendingUpIcon className="w-8 h-8" />
    },
    { 
      title: "Active Strategies", 
      value: "12", 
      change: "+2",
      positive: true,
      icon: <ChartPieIcon className="w-8 h-8" />
    },
    { 
      title: "Risk Score", 
      value: "7.2/10", 
      change: "-0.3",
      positive: false,
      icon: <ShieldCheckIcon className="w-8 h-8" />
    }
  ];

  const assetAllocation = [
    { name: "DeFi Protocols", percentage: 35, value: "$840K", color: "bg-fuchsia-primary" },
    { name: "Yield Farming", percentage: 25, value: "$600K", color: "bg-neon-purple" },
    { name: "Liquidity Pools", percentage: 20, value: "$480K", color: "bg-electric-blue" },
    { name: "Stablecoins", percentage: 15, value: "$360K", color: "bg-cyber-green" },
    { name: "Reserve Fund", percentage: 5, value: "$120K", color: "bg-gray-400" }
  ];

  const recentTransactions = [
    {
      type: "Deposit",
      amount: "+$50,000",
      asset: "USDC",
      timestamp: "2 hours ago",
      status: "Completed"
    },
    {
      type: "Yield Claim",
      amount: "+$12,500",
      asset: "COMP",
      timestamp: "6 hours ago", 
      status: "Completed"
    },
    {
      type: "Rebalance",
      amount: "$25,000",
      asset: "Multi-asset",
      timestamp: "1 day ago",
      status: "Completed"
    },
    {
      type: "Strategy Exit",
      amount: "-$100,000",
      asset: "AAVE",
      timestamp: "2 days ago",
      status: "Completed"
    }
  ];

  const features = [
    {
      icon: <DocumentChartBarIcon className="w-12 h-12" />,
      title: "Real-time Analytics",
      description: "Monitor portfolio performance with live data feeds and comprehensive analytics dashboards."
    },
    {
      icon: <LockClosedIcon className="w-12 h-12" />,
      title: "Multi-sig Security",
      description: "Secure treasury management with multi-signature wallets and time-locked transactions."
    },
    {
      icon: <ChartPieIcon className="w-12 h-12" />,
      title: "Asset Diversification",
      description: "Automated portfolio rebalancing and risk management across multiple DeFi protocols."
    },
    {
      icon: <ClockIcon className="w-12 h-12" />,
      title: "Historical Reports",
      description: "Access detailed historical performance reports and transparent audit trails."
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
              Treasury <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and manage your DAO's treasury with real-time analytics, transparent reporting, and advanced risk management.
            </p>
          </motion.div>

          {/* Treasury Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treasuryStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-fuchsia-primary">{stat.icon}</div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.positive ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-3xl font-londrina font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Allocation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Asset <span className="text-fuchsia-primary">Allocation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diversified portfolio management across multiple DeFi protocols and strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Allocation Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                {/* Simulated Pie Chart */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-fuchsia-primary via-neon-purple to-electric-blue p-1">
                  <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-londrina font-bold text-fuchsia-primary">$2.4M</div>
                      <div className="text-gray-400">Total Value</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Allocation Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {assetAllocation.map((asset) => (
                <div key={asset.name} className="flex items-center justify-between p-4 bg-dark-card/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${asset.color}`}></div>
                    <div>
                      <div className="font-londrina font-semibold text-white">{asset.name}</div>
                      <div className="text-sm text-gray-400">{asset.value}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-fuchsia-primary">{asset.percentage}%</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Recent <span className="text-neon-purple">Transactions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent view of all treasury activities and transactions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-fuchsia-primary/20">
                <h3 className="font-londrina font-bold text-xl text-white">Transaction History</h3>
              </div>
              <div className="divide-y divide-fuchsia-primary/10">
                {recentTransactions.map((tx, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 hover:bg-fuchsia-primary/5 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          tx.type === 'Deposit' ? 'bg-green-400' :
                          tx.type === 'Yield Claim' ? 'bg-blue-400' :
                          tx.type === 'Rebalance' ? 'bg-yellow-400' :
                          'bg-red-400'
                        }`}></div>
                        <div>
                          <div className="font-londrina font-semibold text-white">{tx.type}</div>
                          <div className="text-sm text-gray-400">{tx.asset}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${
                          tx.amount.startsWith('+') ? 'text-green-400' : 
                          tx.amount.startsWith('-') ? 'text-red-400' : 'text-gray-300'
                        }`}>
                          {tx.amount}
                        </div>
                        <div className="text-sm text-gray-400">{tx.timestamp}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Treasury <span className="text-fuchsia-primary">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced tools for comprehensive treasury management and oversight
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="text-fuchsia-primary mb-6">{feature.icon}</div>
                <h3 className="font-londrina font-bold text-xl mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Start Managing Your <span className="text-fuchsia-primary">Treasury</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take control of your DAO's financial future with our comprehensive treasury management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 flex items-center space-x-2"
              >
                <BanknotesIcon className="w-5 h-5" />
                <span>Access Treasury</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-fuchsia-primary rounded-lg text-fuchsia-primary font-semibold text-lg hover:bg-fuchsia-primary hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <DocumentChartBarIcon className="w-5 h-5" />
                <span>View Reports</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Treasury;
