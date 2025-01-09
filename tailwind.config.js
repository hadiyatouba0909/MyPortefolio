/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-pink': '#F904DF',
        'custom-blue': '#5603FD',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #F904DF, #5603FD)',
      },
    },
  },
  plugins: [],
}