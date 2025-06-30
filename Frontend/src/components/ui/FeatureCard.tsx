import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
  index?: number;
}

const FeatureCard = ({ icon, title, description, color = "fuchsia-primary", index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-base text-center group hover:card-highlight"
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-${color}/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <div className={`text-${color}`}>
          {icon}
        </div>
      </div>
      <h3 className="heading-md mb-4 text-white">
        {title}
      </h3>
      <p className="body-base">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
