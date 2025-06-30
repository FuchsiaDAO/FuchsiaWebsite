import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

interface TechSystemProps {
  name: string;
  role: string;
  description: string;
}

const TechSystemCard = ({ name, role, description, index }: TechSystemProps & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-base text-center"
    >
      <h3 className="heading-md mb-2 text-white">
        {name}
      </h3>
      <p className="text-fuchsia-primary font-londrina font-medium mb-4">
        {role}
      </p>
      <p className="body-base">
        {description}
      </p>
    </motion.div>
  );
};

const AboutTechnologySection = () => {
  const techSystems = [
    {
      name: "AI Strategy Engine",
      role: "Autonomous Investment Manager",
      description: "Advanced algorithms that adapt to market conditions while respecting member-defined constraints.",
    },
    {
      name: "Governance Protocol",
      role: "Democratic Decision Making",
      description: "Smart contracts enabling transparent voting and proposal execution by token holders.",
    },
    {
      name: "Risk Management System",
      role: "Portfolio Protection",
      description: "Real-time monitoring and automatic rebalancing to maintain optimal risk/reward ratios.",
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container-base">
        <SectionHeader
          title="Powered by Technology"
          subtitle="Our autonomous systems work around the clock to maximize returns while maintaining the risk preferences set by our community."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {techSystems.map((system, index) => (
            <TechSystemCard
              key={index}
              name={system.name}
              role={system.role}
              description={system.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTechnologySection;
