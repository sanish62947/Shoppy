/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#4262eb",
        secondary: "#63e6be"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:"3rem"
        }
      }
    },
  },
  darkMode:"selector",
  plugins: [],
}

