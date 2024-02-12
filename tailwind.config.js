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
      white: "#fff",
    },
    fontSize: {
      titleBigPage: "3rem",
      titlePage: "1.5rem",
      navText: "1.125rem",
      paragraphBig: "1.313rem",
      titleSection: "2.25rem",
      smallFont: "1rem",
    },
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
