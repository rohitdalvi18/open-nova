/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors:{
        primary:{
          dark : "#5234CA",
          // light : "#fff"
        },
        secondary:{
          dark : "#5234CA"
        },

        background:{
          dark : "#0B1111",
          darkAccent : "#222222",
          threadLink: 'rgba(255, 255, 255, 0.5)'
        },
        text:{
          white: '#fff',
          accent:"rgba(255, 255, 255, 0.61)"
        }
      }
    },
  },
  plugins: [],
}
