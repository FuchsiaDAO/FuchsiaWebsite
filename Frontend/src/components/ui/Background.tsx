interface BackgroundProps {
  variant?: 'grid' | 'shapes' | 'both';
  opacity?: number;
  className?: string;
}

const Background = ({ variant = 'both', opacity = 0.2, className = "" }: BackgroundProps) => {
  return (
    <>
      {/* Grid Background */}
      {(variant === 'grid' || variant === 'both') && (
        <div className={`fixed inset-0 cyber-grid opacity-${Math.round(opacity * 100)} ${className}`}></div>
      )}
      
      {/* Floating Shapes */}
      {(variant === 'shapes' || variant === 'both') && (
        <div className="fixed inset-0">
          <div className="cyber-shape cyber-shape-1 top-20 left-10 animate-float-1"></div>
          <div className="cyber-shape cyber-shape-2 top-40 right-20 animate-float-2"></div>
          <div className="cyber-shape cyber-shape-3 bottom-32 left-1/4 animate-float-3"></div>
        </div>
      )}
    </>
  );
};

export default Background;
