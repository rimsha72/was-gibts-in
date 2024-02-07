// Import the colors from Tailwind CSS
import { colors } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          150: "#FAFAFA",
          250: "#F5F5F5",
          350: "#7BC2FF",
          450: "#373333",
          550: "#F6F6F6",
          650: "#737479",
          750: "#FFAD33",
          850: "#DDDADB",
          950: "#9E7945",
          1050: "#999CB8",
          1150: "#F6F9FE",
          1250: "#22304A",
          1350: "#9799A0",
          1450: "#DADADA",
          1550: "#1990F6",
          1650: "#999CB8",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
