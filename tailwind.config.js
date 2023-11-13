/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: { min: "415px", max: "800px" },
        sm: { max: "414px" },
      },
      fontFamily: {
        domine: ["Domine", "serif"],
      },
      colors: {
        green: "#2c5326",
        darkgreen: "#7eb312",
        lightgreen: "#316f29",
        grey: "#f6f7fb",
        lightblack: "#151b0a",
        red: "#F80D0D",
        greyTwo: "#85929E",
        yellow: "#F1CF24",
      },
    },
  },
  plugins: [],
};
