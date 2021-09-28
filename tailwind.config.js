module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': 'blue',
      'secondary': 'green',
      'danger': 'red',
      'custom': 'goldenrod',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
