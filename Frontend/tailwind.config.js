/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fuchsia-primary': '#FF3CAC',
        'neon-purple': '#7B2FF7',
        'electric-blue': '#00E5FF',
        'cyber-green': '#39FF14',
        'warning-orange': '#FF6B35',
        'chrome-silver': '#C0C0C0',
        'jet-black': '#000000',
        'dark-bg': '#0A0A0A',
        'dark-surface': '#111111',
        'dark-card': '#1A1A1A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B3B3B3',
        'text-muted': '#666666',
      },
      fontFamily: {
        'londrina': ['Londrina Solid', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float-1': 'float-1 8s ease-in-out infinite',
        'float-2': 'float-2 6s ease-in-out infinite', 
        'float-3': 'float-3 10s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'glitch-1': 'glitch-1 0.8s infinite',
        'glitch-2': 'glitch-2 0.8s infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FF3CAC, 0 0 10px #FF3CAC, 0 0 15px #FF3CAC' },
          '100%': { boxShadow: '0 0 10px #FF3CAC, 0 0 20px #FF3CAC, 0 0 30px #FF3CAC' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 60, 172, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 60, 172, 0.8)' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-15px) translateX(10px)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'rotate(45deg) translateY(0px)' },
          '50%': { transform: 'rotate(225deg) translateY(-10px)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '1%, 13%': { transform: 'translate3d(-2px, 1px, 0)' },
          '16%, 48%': { transform: 'translate3d(2px, -1px, 0)' },
        },
        'glitch-2': {
          '0%, 20%, 21%, 62%, 63%, 99%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '1%, 19%': { transform: 'translate3d(2px, 1px, 0)' },
          '22%, 61%': { transform: 'translate3d(-2px, -1px, 0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(255, 60, 172, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 60, 172, 0.05) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(123, 47, 247, 0.1) 0%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-fuchsia': '0 0 20px rgba(255, 60, 172, 0.3)',
        'glow-purple': '0 0 20px rgba(123, 47, 247, 0.3)',
        'glow-blue': '0 0 20px rgba(0, 229, 255, 0.3)',
        'cyber': '0 0 30px rgba(255, 60, 172, 0.2), inset 0 0 20px rgba(123, 47, 247, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}