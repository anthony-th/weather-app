/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx, js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        yesteryear: ['Yesteryear', 'regular'],
        vasek: ['Vasek-Italic', 'regular'],
        roboto: ['Roboto-regular', 'regular'],
        raleway: ['Raleway-Regular', 'regular']
      },
      backgroundImage: {
        'winter': "url('assets/img/bg.webp')",
      }
    },
  },
  plugins: [],
};
