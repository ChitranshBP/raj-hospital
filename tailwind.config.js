/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef5f3',
          100: '#fde9e6',
          200: '#fbd7d0',
          300: '#f8b8a9',
          400: '#f4917a',
          500: '#fc684b',
          600: '#ea5234',
          700: '#c4401f',
          800: '#a2381c',
          900: '#86341d'
        },
        secondary: {
          50: '#f0fbff',
          100: '#e0f6fe',
          200: '#b9edfe',
          300: '#7cdcfd',
          400: '#36c8fa',
          500: '#0eb3e9',
          600: '#0191c7',
          700: '#0274a1',
          800: '#066185',
          900: '#0b516e'
        },
        accent: {
          50: '#fff0e6',
          100: '#ffd6b3',
          500: '#ff6b35',
          600: '#e55a2e',
          700: '#cc4926',
          800: '#b2381f',
          900: '#992717'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};