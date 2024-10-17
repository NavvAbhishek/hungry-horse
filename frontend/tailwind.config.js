/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#003049",
        red: "#D62828",
        orange: "#F77F00",
        yellow: "#FCBF49",
        cream: "#EAE2B7",
      },
    },
  },
  plugins: [],
};
