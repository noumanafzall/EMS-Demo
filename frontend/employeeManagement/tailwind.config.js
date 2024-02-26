/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg':'#6a4db5',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

