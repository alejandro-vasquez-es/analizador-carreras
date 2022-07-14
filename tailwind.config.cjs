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
    }
  },
  plugins: [],
}