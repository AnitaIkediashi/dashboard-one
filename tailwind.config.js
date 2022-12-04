/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      clashDisplay: ["Clash Display", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      epilogue: ["Epilogue", "sans-serif"],
      redHatDisplay: [
        "Red Hat Display",
        "sans-serif",
        { fontFeatureSettings: '"cv11", "on"' },
      ],
    },
    extend: {
      colors: {
        "color-blue-50": "#f8f8fd",
        "color-blue-100": "#e9ebfd",
        "color-blue-200": "#4640de",
        "color-black-50": "#7c8493",
        "color-black-100": "#202430",
        "color-black-200": "#25324b",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
