import {
  Background,
  CTASection,
  HomeHeroSection,
  HomeFeaturesSection
} from '../components';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Background Elements */}
      <Background variant="both" opacity={0.3} />

      {/* Hero Section with Stats */}
      <HomeHeroSection />

      {/* Features Section */}
      <HomeFeaturesSection />

      {/* CTA Section */}
      <CTASection
        title="Ready to Join the Revolution?"
        subtitle="Connect your wallet and start investing with Fuchsia DAO today. Be part of the future of decentralized finance."
        primaryButton={{
          text: "Launch App",
          onClick: () => console.log("Connect wallet clicked")
        }}
        secondaryButton={{
          text: "Read Documentation",
          onClick: () => window.open("/docs", "_self")
        }}
      />
    </div>
  );
};

export default Home;
