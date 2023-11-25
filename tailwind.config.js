const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/hanger.svg'
  ],
  theme: {
    extend: {
      boxShadow: {
        lgcenter: '0 2px 20px 6px rgb(0 0 0 / 0.1), 0 0 10px 2px rgb(0 0 0 / 0.1)'
      },
      dropShadow: {
        lgcenter: '0 0 2px rgba(255, 255, 255, 1)'
      },
      backgroundImage: {
        gradientdown:
          'radial-gradient(140% 107.13% at 50% 10%,transparent 45%,#364ef580 67%,#6698ff 100%);'
      },
      screens: {
        xs: '400px'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
