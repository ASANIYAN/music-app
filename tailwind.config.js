/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-courier)', ...fontFamily.sans],
      },
      colors: {
        main: "#1E1E1E",
        color1: "#EFEEE0",
        color2: "rgba(255, 255, 255, 0.5)",
        color3: "#A4C7C6",
        color4: "#FACD66",
        color5: "#1D2123",
        color6: "rgba(239, 238, 224, 0.25)",
        color7:"rgba(255, 255, 255, 0.04)",
        color8:"rgba(51, 55, 59, 0.37)",
        navbar: "#1A1E1F",
        like: "#E5524A"
      },
      gridTemplateColumns: {
        collection: 'repeat(auto-fill, minmax(220px, 1fr))',
      },
    },
  },
  plugins: [],
}
