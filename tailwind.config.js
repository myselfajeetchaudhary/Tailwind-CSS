/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        ISWhite: '#eef0f4',
        ISGrey: '#8896ab',
        ISGreen: '#2bd168',
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        '2xl': "1124",
      },
    },
  },
  plugins: [],
}
