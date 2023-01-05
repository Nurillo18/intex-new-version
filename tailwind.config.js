/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#7A7E80",
        darkBlue: "#109EF4",
      },
    },
  },
  plugins: [],
};
