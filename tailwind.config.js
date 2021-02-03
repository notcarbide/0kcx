const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    },
    boxShadow: {
      'md-white': '0 4px 6px -1px rgba(255, 255, 255, 0.7)',
    },
  },
  variants: {},
  plugins: [],
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
}
