/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#003049",
        lightBlue: "#669BBC",
        darkRed: "#780000",
        lightRed: "#C1121F",
        lightCream: "#FDF0D5",
      },
    },
  },
  plugins: [],
};
