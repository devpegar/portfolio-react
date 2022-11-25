/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "400px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      backgroundImage: {
        normal:
          "linear-gradient(to bottom, rgba(7, 57, 75, 0.5), rgba(9, 27, 36, 0.8)), url('/bg-dev.jpg')",
      },
      colors: {
        titulo: "#2e5266",
      },
      fontFamily: {
        logo: ["Ropa Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
