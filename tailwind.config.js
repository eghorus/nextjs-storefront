const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "page-content": defaultTheme.spacing[4],
      },
      maxWidth: {
        page: "70rem",
      },
    },
  },
  plugins: [],
};
