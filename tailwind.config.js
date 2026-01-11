/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D32F2F',
        secondary: '#FFA726',
        charcoal: '#212121',
        beige: '#F5F5DC',
        cream: '#FFFAF0',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Pacifico', 'cursive'],
      },
      boxShadow: {
        'light': '0 2px 4px rgba(0,0,0,0.1)',
        'medium': '0 4px 8px rgba(0,0,0,0.15)',
        'heavy': '0 8px 16px rgba(0,0,0,0.2)',
        'glow': '0 4px 16px rgba(211,47,47,0.4)',
      },
    },
  },
  plugins: [],
}
