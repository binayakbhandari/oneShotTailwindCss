/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily : {
        domine : ['Domine','serif']
      },
      animation : {
        'rotating' : 'rotating 50s linear infinite'
      },
      keyframes : {
        rotating : {
          '0%' : {transform : 'rotate(0deg)'},
          '25%' : {transform : 'rotate(90deg)'},
          '50%' : {transform : 'rotate(180deg)'},
          '75%' : {transform : 'rotate(270deg)'},
          '100%' : {transform : 'rotate(360deg)'},
        }
      }
    },
  },
  plugins: [],
}

