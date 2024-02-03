import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('tailwindcss-animated')],
  theme: {
    extend: {
      keyframes: {
        cursor: {
          '0%': {
            color: '#43D9AD',
          },
          '100%': {
            color: 'rgba(0,0,0,0)',
          },
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        cursor: 'cursor .8s infinite',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      colors: {
        primary: {
          black: '#01080E',
          'dark-blue': '#011627',
          'very-dark-blue': '#011221',
        },
        secondary: {
          'slate-grey': '#607B96',
          'cadet-blue': '#3C9D93',
          purple: '#4D5BCE',
        },
        accent: {
          sand: '#FEA55F',
          turquoise: '#43D9AD',
          salmon: '#E99287',
          plum: '#C98BDF',
        },
        button: {
          primary: '#FEA55F',
          'primary-hover': '#FFAC6B',
          default: '#1C2B3A',
          'default-hover': '#263B50',
        },
      },
    },
  },
}
export default config
