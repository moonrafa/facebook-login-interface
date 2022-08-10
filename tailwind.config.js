/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'blue-fb': '#1877F2',
        'grey-fb': '#F0F2F5',
        'green-fb': '#36A420'
      },
      spacing: {
        580: '36.25rem',
        380: '23.75rem'
      }
    }
  },
  plugins: []
}
