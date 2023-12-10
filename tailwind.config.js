/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* colors */
      colors: {
        "bink-100": "#000000",
        "bink-200": "#3D0000",
        "bink-300": "#950101",
        "bink-400": "#FF0000",
        "bink-500": "#FF0000",
        "bink-600": "#FF0000",
        "bink-700": "#FF0000",
        "denim-100": "#120F1D",
        "denim-200": "#191526",
        "denim-300": "#211D30",
        "denim-400": "#2B263D",
        "denim-500": "#38334A",
        "denim-600": "#504B64",
        "denim-700": "#7A758F",
        "ash-600": "#817998",
        "ash-500": "#9C93B5",
        "ash-400": "#3D394D",
        "ash-300": "#2C293A",
        "ash-200": "#2B2836",
        "ash-100": "#1E1C26"
      },

      /* fonts */
      fontFamily: {
        "open-sans": "'Open Sans'"
      },

      /* animations */
      keyframes: {
        "loading-pin": {
          "0%, 40%, 100%": { height: "0.5em", "background-color": "#282336" },
          "20%": { height: "1em", "background-color": "white" }
        }
      },
      animation: { "loading-pin": "loading-pin 1.8s ease-in-out infinite" }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};
