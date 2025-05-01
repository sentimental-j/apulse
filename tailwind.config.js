/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#141414",
        "athos-card": "#181818",
        "athos-accent": "#e6e6e6",
        "athos-muted": "#232323",
        "athos-border": "rgba(204,204,204,0.10)", // for those faint card lines
      },
      fontFamily: {
        satoshi: ["Satoshi", "Inter", "sans-serif"],
      },
      borderRadius: {
        athos: "32px", // the big card radius
        card: "16px", // for splash cards
        blob: "9999px",
      },
      dropShadow: {
        'framer-glow': '0 0 24px rgba(255,255,255,0.07)',
      },
      boxShadow: {
        'athos-card': '0 8px 32px 0 rgba(0,0,0,0.20), 0 1.5px 6px 0 rgba(0,0,0,0.05)',
      },
      keyframes: {
        'athos-blob-move': {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.08) translateY(-30px)' },
        }
      },
      animation: {
        'athos-blob': 'athos-blob-move 18s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
