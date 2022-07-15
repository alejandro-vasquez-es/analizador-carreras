/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    maxWidth: {
      '1/2': '50%',
      '3/5': '60%',
      '1/4': '25%',
    },
    minWidth: {
      '1/4': '25%',
      '1/5': '20%',
      '1/6': '16%'
    },
    minHeight: {
      '4rm': '4rem'
    }
  },
  plugins: [],
}