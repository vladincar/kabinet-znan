/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'lgW': { 'max': "1127px" },
      'lg': { 'max': "1024px" },
      'tablet': { 'max': "900px" },
      'mobW': { 'max': "736px" },
      'mob': { 'max': "600px" },
      'min-mob': { 'max': "450px" },
    },
    extend: {
      colors: {
        "white-100": "#FAFAFC",
        "white-200": "#F5F5FA",
        "h2-color": "#1A243D",
        "h3-color": "#2C364D",
        "blue": "#BCD8F3",
        "d-blue": "#243B75",
        "dd-blue": "#19223F",
        "green":"#8DE969",
        "brown":"#E4CFB4",
        "blackish":"#000003",
        "light-brown":"#171B1F",
      },
      backgroundImage: {
        "blue-linear-tr": "linear-gradient(92deg, #B9D6F2 48.44%, #F5F5FA 100%)",
        "blue-linear": "linear-gradient(92deg, #B9D6F2 0%, #D5E4F2 100%)",
        "white-linear":
          "linear-gradient(90deg, #FFF 74.48%, rgba(255, 255, 255, 0.00) 100%)",
      },
    },
    fontFamily:{
      'poppins':['sans-serif','Poppins'],
      'rubik':['sans-serif','Rubik'],
    }
  },
  plugins: [],
};
