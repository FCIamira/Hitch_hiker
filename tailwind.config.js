module.exports = {

  purge: [],

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundImage: {
        "home-page": "url('src/assets/1.jpg')",
      },

     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }