/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-primary": "#1e293b",
        "dark-secondary": "#334155",
        "dark-text": "#666",
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
