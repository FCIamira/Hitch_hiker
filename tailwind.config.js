module.exports = {
  purge: [],

  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "home-page": "url('src/assets/3.png')",
        "main-page": "url('src/assets/back.jpg')",
      },

      // height: {
      //   'h-full': '100%',
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
