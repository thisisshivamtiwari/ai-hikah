/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9f4ee',
          100: '#f3e8da',
          200: '#ebd1b8',
          300: '#e3b58e',
          400: '#ce8356',
          500: '#b84f34',
          600: '#9b1c2c',
          700: '#7e1625',
          800: '#5f121d',
          900: '#430d15',
        },
      },
      boxShadow: {
        brand: '0 16px 40px rgba(126, 22, 37, 0.2)',
      },
    },
  },
  plugins: [],
}
