// Import the colors from Tailwind CSS
import { colors } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          "150": '#FAFAFA',
          "250": '#F5F5F5',
          "350": '#7BC2FF',
          "450": '#373333',
          "550": '#F6F6F6',
          "650": '#737479',
          "750": '#FFAD33',
          "850": '#868686',
          "950": '#9E7945',
          "1050":'#828282'
        }
      },
    },
    fontFamily: {
      // Correct the font family name and provide fallbacks
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
