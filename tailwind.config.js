/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dist/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#606060"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
     },
  },
  plugins: [],
}
