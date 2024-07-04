/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif ",
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
          accent: "#d4d8dd",
          neutral: "#f1f2f5",
        },
      },
      {
        dark: {
          primary: "#1972c8",
          secondary: "#111825",
          accent: "#616975",
          neutral: "#131313",
        },
      },
    ],
  },
};
