/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        accentPink: "#FFB6C1",
        accentBronze: "#D4AF37",
      },
      dropShadow: {
        'hero-glow': '0 4px 42px rgba(255,182,193,0.36)',
        'glow': '0 1px 10px rgba(255,182,193,0.1)'
      },
      boxShadow: {
        'frost': '0 2px 24px 0 rgba(212,175,55,0.08), 0 1.5px 6px 0 rgba(10,10,10,0.13)',
      },
      keyframes: {
        'blob-move1': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-40px) scale(1.07)' },
        },
        'blob-move2': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '40%':     { transform: 'translateY(30px) scale(1.1)' },
          '80%':     { transform: 'translateY(-20px) scale(0.95)' },
        }
      },
      animation: {
        'blob-move1': 'blob-move1 20s ease-in-out infinite',
        'blob-move2': 'blob-move2 26s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}