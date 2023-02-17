/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Cairo: ["Cairo"] },
    },
    animation: {
      gradient: "animateGradient 12s ease infinite",
      gradientSpeed: "animateGradient 6s ease infinite",
    },
    keyframes: {
      animateGradient: {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "bottom left",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "top right",
        },
      },
    },
  },
  plugins: [],
};
