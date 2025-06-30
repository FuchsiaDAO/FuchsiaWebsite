import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroSectionProps {
  badge?: {
    icon: ReactNode;
    text: string;
  };
  title: string | ReactNode;
  subtitle: string;
  className?: string;
  children?: ReactNode;
}

const HeroSection = ({ badge, title, subtitle, className = "", children }: HeroSectionProps) => {
  return (
    <section className={`py-24 relative z-10 ${className}`}>
      <div className="container-base">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {badge && (
              <div className="inline-flex items-center px-4 py-2 bg-fuchsia-primary/10 border border-fuchsia-primary/30 rounded-full mb-6">
                <div className="w-4 h-4 text-fuchsia-primary mr-2">
                  {badge.icon}
                </div>
                <span className="text-sm font-londrina text-fuchsia-primary">
                  {badge.text}
                </span>
              </div>
            )}
            
            <h1 className="heading-xl mb-6 text-white">
              {title}
            </h1>
            
            <p className="body-lg mb-12 max-w-3xl mx-auto">
              {subtitle}
            </p>

            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
