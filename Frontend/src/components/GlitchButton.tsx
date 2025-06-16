import React from 'react';
import { motion } from 'framer-motion';

interface GlitchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const GlitchButton: React.FC<GlitchButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  href,
  type = 'button',
}) => {
  const baseClasses = 'relative px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-fuchsia-primary to-neon-purple text-white rounded-lg',
    secondary: 'bg-gradient-to-r from-neon-purple to-electric-blue text-white rounded-lg',
    outline: 'border-2 border-fuchsia-primary text-fuchsia-primary hover:bg-fuchsia-primary hover:text-white rounded-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {variant === 'primary' && (
        <div className="absolute inset-0 animate-glow opacity-75"></div>
      )}
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-primary/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GlitchButton;
