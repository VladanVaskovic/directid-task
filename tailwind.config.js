/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
  theme: {
      extend: {
        colors: {
          'main-color': '#052c57',
          'second-color': '#2c6aaf',
          'account-back': '#eaf4ff',
          'th-color': '#ececec',
          'tr-color': '#f7f7f7',
          'item-color': '#ff0000',
        },
      },
  },
  plugins: [],
}
