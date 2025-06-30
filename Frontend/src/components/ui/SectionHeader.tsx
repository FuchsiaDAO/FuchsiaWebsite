interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="heading-lg mb-6 text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="body-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
