/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2A6B',
        'navy-deep': '#071A45',
        gold: '#E6A817',
        crimson: '#C0392B'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(11, 42, 107, 0.18)'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(230,168,23,0.2), transparent 36%), radial-gradient(circle at right top, rgba(11,42,107,0.3), transparent 28%), linear-gradient(180deg, #ffffff 0%, #f4f7ff 100%)'
      }
    }
  },
  plugins: []
};