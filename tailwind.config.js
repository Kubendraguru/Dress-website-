/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'Italiana', '"Playfair Display"', 'Didot', 'serif'],
        serif: ['"Bodoni Moda"', '"Playfair Display"', 'Italiana', 'serif'],
        display: ['"Bodoni Moda"', 'Italiana', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        atelier: {
          bg: '#faf8f5',
          cream: '#f5f0e8',
          sand: '#ede6d8',
          dark: '#121212',
          charcoal: '#1e1e1e',
          accent: '#e69526',
          gold: '#c59d5f',
          cobalt: '#0e38b1',
          crimson: '#c0272d'
        }
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
