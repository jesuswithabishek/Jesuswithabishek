/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0e14',
          900: '#0f1419',
          850: '#141a23',
          800: '#1a2030',
          700: '#252d3d',
          600: '#363f52',
        },
        gold: {
          50: '#fbf7ed',
          100: '#f5edd4',
          200: '#ecdca6',
          300: '#e0c578',
          400: '#d4af37',
          500: '#c29e2e',
          600: '#a8841f',
          700: '#8a6a16',
          800: '#6e5410',
          900: '#5a4510',
        },
        cream: {
          50: '#fdfcf7',
          100: '#faf6ea',
          200: '#f4ecd4',
          300: '#ecdfba',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
