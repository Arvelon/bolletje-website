/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#32382e",
        accentColor: "#68c9e5",
        offWhite: "#F5F9FF",
        lightGreen: "#899A83"
      },
      maxWidth: {
        xxs: '10rem',
        'screen-3xl': '1920px',
      },
    },
  },
  plugins: [],
}
