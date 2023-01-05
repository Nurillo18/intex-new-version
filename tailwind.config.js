/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#7A7E80",
        darkBlue: "#109EF4",
      },
      backgroundImage: {
        searchIcon: "url(../public/Images/Header_Imgs/search-icon.svg)",
      },
      backgroundColor: {
        headerBg: "#FAFAFA",
      },
      margin: {
        120: "120px",
      },
    },
  },
  plugins: [],
};
