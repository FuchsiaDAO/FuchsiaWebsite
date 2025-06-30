import { motion } from 'framer-motion';
import { 
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const Blog = () => {
  const featuredPost = {
    title: "The Future of Decentralized Investment: Fuchsia DAO Q1 2024 Update",
    excerpt: "Discover how our latest protocol upgrades are revolutionizing DeFi investment strategies, with new yield optimization algorithms and governance improvements that put community control at the forefront.",
    author: "Sarah Chen",
    authorRole: "Head of Protocol",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    tags: ["Protocol", "DeFi", "Governance"]
  };

  const blogPosts = [
    {
      title: "Building Your First Investment DAO: A Complete Guide",
      excerpt: "Step-by-step tutorial on creating and deploying your investment DAO using our new launchpad tools.",
      author: "Marcus Rivera",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Tutorial",
      tags: ["Tutorial", "DAO", "Investment"]
    },
    {
      title: "Governance Token Economics: Balancing Power and Participation",
      excerpt: "Analyzing the latest trends in DAO governance and how token distribution affects decision-making.",
      author: "Elena Vasquez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Research",
      tags: ["Governance", "Tokenomics", "Research"]
    },
    {
      title: "Security Audit Results: How We Achieved 100% Coverage",
      excerpt: "Transparency report on our latest security audit by Trail of Bits and the improvements implemented.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Security",
      tags: ["Security", "Audit", "Protocol"]
    },
    {
      title: "Community Spotlight: $2M Investment Success Story",
      excerpt: "How the EcoDAO community used Fuchsia's tools to generate exceptional returns in sustainable DeFi.",
      author: "Alex Thompson",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Community",
      tags: ["Community", "Success Story", "Investment"]
    },
    {
      title: "Multi-Chain Expansion: Polygon and Arbitrum Integration",
      excerpt: "Announcing our expansion to Layer 2 solutions with reduced gas fees and faster transactions.",
      author: "Jennifer Walsh",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "Development",
      tags: ["Multi-chain", "Layer 2", "Integration"]
    },
    {
      title: "DeFi Yield Farming: Advanced Strategies for DAOs",
      excerpt: "Explore sophisticated yield optimization techniques available through our automated treasury management.",
      author: "Michael Zhang",
      date: "March 1, 2024",
      readTime: "15 min read",
      category: "Strategy",
      tags: ["DeFi", "Yield Farming", "Strategy"]
    }
  ];

  const categories = [
    { name: "All Posts", count: 47, active: true },
    { name: "Protocol", count: 12 },
    { name: "Tutorial", count: 15 },
    { name: "Research", count: 8 },
    { name: "Community", count: 9 },
    { name: "Security", count: 3 }
  ];

  const trendingTopics = [
    "DAO Governance",
    "DeFi Strategies", 
    "Token Economics",
    "Multi-chain",
    "Yield Optimization",
    "Security Audits"
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
              Fuchsia <span className="bg-gradient-to-r from-fuchsia-primary to-neon-purple bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments, insights, and community stories from the Fuchsia ecosystem.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-fuchsia-primary text-white'
                    : 'bg-dark-card/50 text-gray-300 hover:bg-fuchsia-primary/20 hover:text-fuchsia-primary'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center space-x-2 mb-6">
              <FireIcon className="w-6 h-6 text-fuchsia-primary" />
              <span className="text-fuchsia-primary font-semibold">Featured Post</span>
            </div>
            
            <div className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl overflow-hidden hover:border-fuchsia-primary/40 transition-all duration-300 group">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-fuchsia-primary/20 to-neon-purple/20 flex items-center justify-center">
                    <BookOpenIcon className="w-24 h-24 text-fuchsia-primary/50" />
                  </div>
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-fuchsia-primary/20 text-fuchsia-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-londrina font-bold text-3xl text-white mb-4 group-hover:text-fuchsia-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <UserIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-fuchsia-primary hover:text-fuchsia-300 transition-colors duration-200">
                      <span className="font-medium">Read More</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:space-x-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="font-londrina font-bold text-3xl text-white mb-8">Latest Posts</h2>
              </motion.div>

              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-dark-card/30 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 hover:border-fuchsia-primary/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <ClockIcon className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-londrina font-bold text-xl text-white mb-3 group-hover:text-fuchsia-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-dark-bg/50 text-gray-400 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <UserIcon className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300 text-sm">{post.author}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                      </div>
                      <button className="flex items-center space-x-2 text-fuchsia-primary hover:text-fuchsia-300 transition-colors duration-200">
                        <span className="font-medium">Read More</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mt-12"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300">
                  Load More Posts
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-fuchsia-primary/20 rounded-xl p-6 mb-8"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <ArrowTrendingUpIcon className="w-6 h-6 text-fuchsia-primary" />
                  <h3 className="font-londrina font-bold text-xl text-white">Trending Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <button
                      key={index}
                      className="px-3 py-2 bg-dark-bg/50 text-gray-300 rounded-lg text-sm hover:bg-fuchsia-primary/20 hover:text-fuchsia-primary transition-all duration-200"
                    >
                      #{topic}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-fuchsia-primary/10 to-neon-purple/10 border border-fuchsia-primary/20 rounded-xl p-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-fuchsia-primary" />
                  <h3 className="font-londrina font-bold text-xl text-white">Stay Updated</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Get the latest insights and updates delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-dark-card/50 border border-fuchsia-primary/20 rounded-lg text-white placeholder-gray-400 focus:border-fuchsia-primary/40 focus:outline-none"
                  />
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-fuchsia-primary to-neon-purple rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
