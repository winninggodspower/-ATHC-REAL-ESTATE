/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/templates/**/*.html", "./**/templates/**/**/*.html"],
  theme: {
    extend: {
      colors: {
        light_green: "rgba(36, 211, 22, 0.2)",
        primary_green: "#24D316",
        primary_blue: "#0214B6",
        milk: "#F8F8F8",
        
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        polar_one: [ 'Poller One', 'cursive'],
        inter: [ 'Inter', "sans-serif"],
      },
      backgroundImage: {
        'hero-image-1': "url('/static/img/apartment_building.png')",
      },
    },

  },
  plugins: [],
}

