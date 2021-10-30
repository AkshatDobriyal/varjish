module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {


    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#91B2C7',
      'secondary': '#9197C7',
      'danger': '#C7BD91',
      'back':"#202020",
      'photo':"#E5E7EB"
    }),

    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#91B2C7',
      'secondary': '#9197C7',
      'danger': '#C7BD91',
      'back':"#202020",
      'new':"#1A1A1A",
      'photo':"#E5E7EB",

    }),
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '25':'25px'
    },
    extend: {

      backgroundImage: {
        'back-1': "url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')",
        'back-2': "url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')",
      },



      width: {
        '8/10': '85.3%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
