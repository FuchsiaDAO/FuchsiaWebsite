import { GlobeAltIcon } from '@heroicons/react/24/outline';
import {
  HeroSection,
  Background,
  CTASection,
  AboutMissionSection,
  AboutPrinciplesSection,
  AboutTechnologySection
} from '../components';

const About = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* Background Elements */}
      <Background variant="grid" opacity={0.2} />
      
      {/* Hero Section */}
      <HeroSection
        badge={{
          icon: <GlobeAltIcon className="w-4 h-4" />,
          text: "About Fuchsia DAO"
        }}
        title={
          <>
            Redefining
            <br />
            <span className="text-gradient">Investment DAOs</span>
          </>
        }
        subtitle="Fuchsia DAO represents the next evolution of decentralized investment. We combine artificial intelligence, transparent governance, and community wisdom to create superior investment outcomes for our members."
      />

      {/* Mission Section */}
      <AboutMissionSection />

      {/* Principles Section */}
      <AboutPrinciplesSection />

      {/* Technology Section */}
      <AboutTechnologySection />

      {/* CTA Section */}
      <CTASection
        title="Join the Future of Finance"
        subtitle="Ready to be part of the most advanced investment DAO ever created? Connect your wallet and start your journey with Fuchsia today."
        primaryButton={{
          text: "Connect Wallet",
          onClick: () => console.log("Connect wallet clicked")
        }}
        secondaryButton={{
          text: "Read Whitepaper",
          onClick: () => console.log("Read whitepaper clicked")
        }}
      />
    </div>
  );
};

export default About;
