/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#01FE87",
        secondary: "#25283B"
      },
      backgroundColor: {
        primary: "#01FE87",
        secondary: "#25283B",
        background: "#111521",
        //background: "#2E2F34",
        backgroundLight: "#34353A"
      }
    },
  },
  plugins: [],
}

