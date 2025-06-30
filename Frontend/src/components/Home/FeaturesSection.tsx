import { 
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import SectionHeader from '../ui/SectionHeader';
import FeatureCard from '../ui/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: "AI-Powered Investment",
      description: "Algorithmic strategies that adapt to market conditions while maintaining your risk preferences.",
      color: "fuchsia-primary"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Transparent Governance", 
      description: "Every decision is voted on by token holders. Full transparency, no hidden fees.",
      color: "neon-purple"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Live portfolio tracking, performance metrics, and risk analysis at your fingertips.",
      color: "electric-blue"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Community Driven",
      description: "Join a community of forward-thinking investors building the future of finance.",
      color: "cyber-green"
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container-base">
        <SectionHeader
          title="Built for the Future of Finance"
          subtitle="Combining cutting-edge AI with transparent governance to create the most advanced investment DAO ever built."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
