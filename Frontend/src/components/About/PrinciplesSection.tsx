import { 
  LightBulbIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import SectionHeader from '../ui/SectionHeader';
import FeatureCard from '../ui/FeatureCard';

const PrinciplesSection = () => {
  const principles = [
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Innovation First",
      description: "We leverage cutting-edge AI and blockchain technology to redefine how investment DAOs operate.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Transparency Always",
      description: "Every decision, transaction, and strategy is visible on-chain. No hidden fees, no backdoor deals.",
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Community Governed",
      description: "Token holders control the direction of the DAO through democratic voting and proposal systems.",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Data Driven",
      description: "Our AI algorithms make investment decisions based on real-time market data and risk analysis.",
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container-base">
        <SectionHeader
          title="Our Principles"
          subtitle="These core values guide every decision we make and every line of code we write."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <FeatureCard
              key={index}
              icon={principle.icon}
              title={principle.title}
              description={principle.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
