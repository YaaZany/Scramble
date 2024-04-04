/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4806B",
        secondary: "#313131",
        bgPrimary: "#292929",
        bgGrey: "#656565",
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
      },
    },
  },
  plugins: [],
}

