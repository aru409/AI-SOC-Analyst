/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16324f',
        surge: '#1ea7fd',
        alert: '#ff8b6b',
        panel: '#eef6fb',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(30, 167, 253, 0.12), 0 24px 80px rgba(22, 50, 79, 0.12)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(22,50,79,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,50,79,0.06) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3.5s ease-in-out infinite',
        rise: 'rise 800ms ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.04)' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
