/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      lightGray: "rgb(143,138,154)",
      darkPurple: "#1F1534",
      gray: "#7D7987",
      black: "#000",
      titleColor: "#233348",
      blue: "#458FF6",
      lightBlue: "#99C2FA",
      white: "#fff",
      lightBlueDot: "#5B9BF3",
    },
    fontSize: {
      titleBigPage: "3rem", //48px
      titlePage: "1.5rem", //24px
      navText: "1.125rem", //18px
      paragraphBig: "1.313rem", //21 px
      titleSection: "2.25rem", //36px
      smallFont: "1rem", //16px
    },
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
