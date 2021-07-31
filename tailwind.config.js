module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
      },
      backgroundImage: (theme) => ({
        'back-lg': "url('../images/Bg.jpg')",
      }),
    },
    boxShadow: (theme) => ({
      'quote-shadow': '4px 3px 4px rgba(0, 0, 0, 0.25)',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
