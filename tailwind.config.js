module.exports = {
  purge: [
      './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@code-bureau/tailwindcss-wp-typography')({
    className: 'MindKey'
  })],
}
