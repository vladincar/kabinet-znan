/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'lg': { 'max': "1024px" },
      'tablet': { 'max': "900px" },
      'mob': { 'max': "600px" },
    },
    extend: {
      colors: {
        "white-100": "#FAFAFC",
        "white-200": "#F5F5FA",
        "h2-color": "#1A243D",
        "h3-color": "#2C364D",
        "green":"#8DE969",
      },
      backgroundImage: {
        "blue-linear-tr": "linear-gradient(135deg, #B9D6F2 48.44%, #F5F5FA 100%)",
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
