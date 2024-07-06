// tailwind.config.js

module.exports = {
  darkMode: "class", // Enable dark mode based on class
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
        Playfair: "'Playfair Display', serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#389afe",
          secondary: "#fefefe",
          accent: "#eff2f5",
          neutral: "#1f1f1f",
        },
      },
      {
        dark: {
          primary: "#1972c8",
          secondary: "#111825",
          accent: "#131313",
          neutral: "#ffffff",
        },
      },
    ],
  },
};
