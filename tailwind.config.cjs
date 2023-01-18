/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E213B",
        secondry: "#1a1d37",
        tertiary: "#272B4A",
        accent: "#E02F6A",
      },
    },
  },
  plugins: [],
};
