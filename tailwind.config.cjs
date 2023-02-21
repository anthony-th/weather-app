/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js, html}"],
  theme: {
    extend: {
      fontFamily: {
        yesteryear: ["Yesteryear", "regular"],
        vasek: ["Vasek-Italic", "regular"],
        roboto: ["Roboto-regular", "regular"],
        raleway: ["Raleway-Regular", "regular"],
      },
      backgroundImage: {
        winter: "url('assets/img/bg.webp')",
      },
    },
  },
  plugins: [],
};
