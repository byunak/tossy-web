/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        teko: ['"Teko"', '"sans-serif"'],
        worksans: ['"Work Sans"', '"sans-serif"'],
        crimson: ['"Crimson Text"', '"sans-serif"'],
      },
      colors: {
        main: "#425F57",
        secondary: "#749F82",
        third: "#CFFF8D",
        alternative: "#74C69D",
        warning: "#FFB84E",
      },
    },
  },
  plugins: [],
};
