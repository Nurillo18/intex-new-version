/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#7A7E80",
        darkBlue: "#109EF4",
        footerBgColor: "#F7F9FA",
        textColor: "#24283A",
        footerLinkColor: "#464A4D",
      },
      backgroundImage: {
        bgInstagram:
          "radial-gradient(230.93% 230.93% at 102.01% 2.03%, #F9ED32 0%, #EE2A7B 36%, #D22A8A 44%, #8B2AB2 60%, #1B2AF0 83%, #002AFF 88%)",
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
