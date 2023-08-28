/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "325px",
      xm: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        "architects-daughter": ['"Architects Daughter"', "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
