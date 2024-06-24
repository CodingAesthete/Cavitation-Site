/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '415px',
        'sl': '1322px',
        'home-container': '1305px',
        'home-upper': '1209px',
      },
    },
  },
  plugins: [],
}

