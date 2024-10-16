/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fadeInSlow: 'fadeInSlow 1.5s ease-in-out',
        slideInUp: 'slideInUp 1s ease-in-out',
      },
      keyframes: {
        fadeInSlow: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      screens: {
        'extrasmall': '360px',
        'xs': '415px',
        'header-sm': '500px',
        'sl': '1322px',
        'home-container': '1305px',
        'home-upper': '1209px',
        'header-special': '1142px',
        'medium': '946px',
        'medium2': '1096px',
        'medium3': '1200px',
        'header-fixer': '810px',
      },
    },
  },
  plugins: [],
}

