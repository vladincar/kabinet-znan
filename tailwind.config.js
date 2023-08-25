/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white-100':'#FAFAFC',
        'white-200':'#F5F5FA',
        'h2-color':'#1A243D',
        'h3-color':'#2C364D'
      },
      backgroundImage:{
        'blue-linear':'linear-gradient(135deg, #B9D6F2 48.44%, #F5F5FA 100%)',
        'white-linear':'linear-gradient(90deg, #FFF 74.48%, rgba(255, 255, 255, 0.00) 100%)',
      }
    },
  },
  plugins: [],
}

