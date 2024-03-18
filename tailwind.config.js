/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        whiteScroll: '#ffffff',
      },
      transitionDuration: {
        '1000': '1000ms', 
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out', // Adjust the duration and easing as needed
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}