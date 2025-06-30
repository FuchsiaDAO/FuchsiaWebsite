interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  className?: string;
}

const CTASection = ({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton, 
  className = "" 
}: CTASectionProps) => {
  return (
    <section className={`py-24 relative z-10 ${className}`}>
      <div className="container-base">
        <div className="card-highlight text-center py-16 px-8 max-w-4xl mx-auto">
          <h2 className="heading-lg mb-6 text-white">
            {title}
          </h2>
          <p className="body-lg mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <button 
                className="btn-primary"
                onClick={primaryButton.onClick}
              >
                {primaryButton.text}
              </button>
            )}
            {secondaryButton && (
              <button 
                className="btn-secondary"
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
