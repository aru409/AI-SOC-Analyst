/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f6fbff',
        surge: '#8fd3ff',
        alert: '#ffd0a8',
        panel: '#10284a',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(143, 211, 255, 0.18), 0 24px 80px rgba(1, 10, 28, 0.42)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3.5s ease-in-out infinite',
        rise: 'rise 800ms ease-out forwards',
        drift: 'drift 18s ease-in-out infinite alternate',
        shimmer: 'shimmer 2.8s linear infinite',
        bob: 'bob 4.8s ease-in-out infinite',
        fadeUp: 'fadeUp 700ms ease-out both',
        blink: 'blink 4.6s infinite',
        wave: 'wave 3.2s ease-in-out infinite',
        shieldPulse: 'shieldPulse 3.6s ease-in-out infinite',
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
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '100%': { transform: 'translate3d(0, -18px, 0) scale(1.03)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-140%) skewX(-18deg)' },
          '100%': { transform: 'translateX(220%) skewX(-18deg)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blink: {
          '0%, 45%, 100%': { transform: 'scaleY(1)' },
          '48%, 52%': { transform: 'scaleY(0.12)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
        shieldPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.75 },
          '50%': { transform: 'scale(1.06)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
