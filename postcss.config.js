var tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss('./tailwindmodule'),
    require('autoprefixer')
  ]
}