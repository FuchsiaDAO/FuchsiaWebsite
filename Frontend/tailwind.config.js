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
        'chrome-silver': '#C0C0C0',
        'jet-black': '#000000',
        'dark-bg': '#0A0A0A',
        'dark-card': '#1A1A1A',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'audiowide': ['Audiowide', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FF3CAC, 0 0 10px #FF3CAC, 0 0 15px #FF3CAC' },
          '100%': { boxShadow: '0 0 10px #FF3CAC, 0 0 20px #FF3CAC, 0 0 30px #FF3CAC' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-grid': 'linear-gradient(rgba(255, 60, 172, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 60, 172, 0.1) 1px, transparent 1px)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}