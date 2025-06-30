import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  HeartIcon,
  TrophyIcon,
  UserGroupIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

const Community = () => {
  const socialPlatforms = [
    {
      name: "Discord",
      icon: "💬",
      members: "15K+",
      description: "Join daily discussions, governance talks, and get real-time support from our community.",
      link: "#",
      bgGradient: "from-purple-500 to-blue-500"
    },
    {
      name: "Twitter",
      icon: "🐦", 
      members: "25K+",
      description: "Stay updated with latest announcements, market insights, and community highlights.",
      link: "#",
      bgGradient: "from-blue-400 to-cyan-400"
    },
    {
      name: "Telegram",
      icon: "📱",
      members: "8K+",
      description: "Real-time community chat, trading signals, and instant support from our team.",
      link: "#",
      bgGradient: "from-cyan-400 to-blue-500"
    },
    {
      name: "Reddit",
      icon: "🌐",
      members: "12K+", 
      description: "Deep discussions, AMAs with the team, and community-driven content creation.",
      link: "#",
      bgGradient: "from-orange-500 to-red-500"
    }
  ];

  const communityFeatures = [
    {
      icon: <UserGroupIcon className="w-12 h-12" />,
      title: "Inclusive Community",
      description: "Join a diverse group of DeFi enthusiasts, developers, and financial innovators from around the world."
    },
    {
      icon: <AcademicCapIcon className="w-12 h-12" />,
      title: "Educational Resources",
      description: "Access exclusive tutorials, webinars, and educational content to level up your DeFi knowledge."
    },
    {
      icon: <TrophyIcon className="w-12 h-12" />,
      title: "Contribution Rewards",
      description: "Earn rewards for contributing to the ecosystem through bug reports, content creation, and community building."
    },
    {
      icon: <RocketLaunchIcon className="w-12 h-12" />,
      title: "Early Access",
      description: "Get early access to new features, beta testing opportunities, and exclusive community events."
    }
  ];

  const upcomingEvents = [
    {
      date: "Jan 15",
      title: "Community AMA with Founders",
      time: "2:00 PM UTC",
      type: "Virtual"
    },
    {
      date: "Jan 22",
      title: "DAO Governance Workshop",
      time: "6:00 PM UTC", 
      type: "Discord"
    },
    {
      date: "Feb 5",
      title: "DeFi Trading Masterclass",
      time: "4:00 PM UTC",
      type: "Virtual"
    },
    {
      date: "Feb 18",
      title: "Monthly Community Call",
      time: "3:00 PM UTC",
      type: "Zoom"
    }
  ];

  const stats = [
    { value: "30K+", label: "Community Members" },
    { value: "150+", label: "Countries Represented" },
    { value: "500+", label: "Daily Active Users" },
    { value: "95%", label: "Member Satisfaction" }
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
            className="text-center"
          >
            <h1 className="font-londrina font-bold text-5xl md:text-6xl mb-6">
              Join the <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Connect with thousands of builders, creators, and financial rebels reshaping the future of decentralized finance.
            </p>
            
            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-londrina font-bold bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-londrina">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your preferred platform and join the conversation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-8 hover:border-fuchsia-primary/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl">{platform.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-londrina font-bold text-fuchsia-primary">{platform.members}</div>
                      <div className="text-sm text-gray-400">members</div>
                    </div>
                  </div>
                  <h3 className="font-londrina font-bold text-2xl mb-3 group-hover:text-fuchsia-primary transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {platform.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-dark-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Why Join Our <span className="text-fuchsia-primary">Community</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than just a community—it's your gateway to the future of finance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-6 p-6 bg-dark-bg/50 rounded-xl border border-fuchsia-primary/20 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="text-fuchsia-primary flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-londrina font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Upcoming <span className="text-neon-purple">Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss out on exclusive community events and educational sessions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-2xl font-londrina font-bold text-fuchsia-primary mb-1">
                      {event.date}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center space-x-2">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                <h3 className="font-londrina font-semibold text-lg text-white">
                  {event.title}
                </h3>
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
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="font-londrina font-bold text-4xl md:text-5xl mb-6">
              Ready to <span className="text-fuchsia-primary">Get Involved</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our thriving community today and be part of the decentralized finance revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-fuchsia-primary/50 transition-all duration-300 flex items-center space-x-2"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Join Discord</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-fuchsia-primary rounded-lg text-fuchsia-primary font-semibold text-lg hover:bg-fuchsia-primary hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <HeartIcon className="w-5 h-5" />
                <span>Follow on Twitter</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;
