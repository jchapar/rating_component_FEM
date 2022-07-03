/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        orange: '#FB7718',
        lightGrey: '#959eac',
        mediumGrey: '#7C8798',
        darkBlue: '#252D37',
        veryDarkBlue: '#121417',
        dark: '#151519',
        iconBg: '#262f38',
      },
      fontFamily: {
        sans: ['overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
