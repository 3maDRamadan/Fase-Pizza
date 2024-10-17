/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono , monospace",
    },

    extend: {
      colors: {
        mainColor: "#0ea5e9",
        secondColor: "#38bdf8",
      },
      height : {
        screen : '100dvh '
      }
    },
  },
  plugins: [],
};
