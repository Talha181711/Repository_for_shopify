/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.liquid", // This will target all .liquid files across the theme
    "./assets/**/*.js", // Optional: If you have JavaScript files that contain Tailwind classes dynamically
  ],
  theme: {
    extend: {
      height: {
        94: "22rem",
      },
    },
  },
  plugins: [],
};
