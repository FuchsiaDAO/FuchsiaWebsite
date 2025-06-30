import { Link } from 'react-router-dom';
import { ArrowRightIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import HeroSection from '../ui/HeroSection';
import HomeStatsSection from './HomeStatsSection';

const HomeHeroSection = () => {
  return (
    <HeroSection
      badge={{
        icon: <LightBulbIcon className="w-4 h-4" />,
        text: "Revolutionizing Investment DAOs"
      }}
      title={
        <>
          Finance,
          <br />
          <span className="text-gradient glitch" data-text="Rewritten in Fuchsia.">
            Rewritten in Fuchsia.
          </span>
        </>
      }
      subtitle="Join the future of decentralized investment. AI-powered strategies, transparent governance, and community-driven growth—all in one platform."
      className="pt-20"
    >
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button className="btn-primary flex items-center space-x-2">
          <span>Start Investing</span>
          <ArrowRightIcon className="w-5 h-5" />
        </button>
        <Link to="/about" className="btn-secondary">
          Learn About Fuchsia
        </Link>
      </div>

      {/* Stats Section */}
      <HomeStatsSection />
    </HeroSection>
  );
};

export default HomeHeroSection;
