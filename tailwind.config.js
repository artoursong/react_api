/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ['Pacifico','sans-serif']
    },

    extend: {
      colors: {red: '#fffffff'}
    },
  },
  plugins: [],
}

